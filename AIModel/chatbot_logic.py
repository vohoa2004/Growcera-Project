import re
import json
from database import query_database_async # Import async db function
from gemini_service import generate_content_async # Import async gemini function
import pandas as pd

with open("database_description.json", "r") as f:
    database_description = json.load(f)

async def process_chatbot_request(user_input: str):
    """
    Processes user input, potentially generates and executes SQL,
    and synthesizes a response using Gemini.
    """
    # Step 1: Send user question and schema to Gemini
    prompt_initial = f"""Bạn là một chatbot hỗ trợ khách hàng cho cửa hàng Growcera.
    Bạn có quyền truy cập vào cơ sở dữ liệu của cửa hàng để trả lời các câu hỏi về sản phẩm, đơn hàng, người dùng, v.v.
    Cơ sở dữ liệu của bạn được mô tả trong phần dưới đây:
    ---
    {json.dumps(database_description, indent=2)}
    ---

    Dưới đây là câu hỏi của người dùng:
    {user_input}

    Dựa vào câu hỏi của người dùng và thông tin từ cơ sở dữ liệu, hãy cung cấp câu trả lời phù hợp.
    Nếu cần, bạn có thể tạo ra các câu truy vấn MySQL để lấy thông tin từ cơ sở dữ liệu.
    Khi bạn tạo câu truy vấn MySQL, hãy bao bọc nó trong cặp dấu ```sql ```. CHỈ TRẢ VỀ CÂU TRUY VẤN MySQL VÀ KHÔNG GÌ KHÁC nếu bạn quyết định cần truy vấn. Nếu không cần truy vấn, hãy trả lời trực tiếp.
    """

    try:
        gemini_output = await generate_content_async(prompt_initial)
        print(f"Gemini initial output: {gemini_output}")

        # Step 2: Check for SQL query in Gemini's output
        sql_match = re.search(r"```sql\s*(.*?)\s*```", gemini_output, re.DOTALL)

        if sql_match:
            sql_query = sql_match.group(1).strip()
            print(f"Detected SQL query: {sql_query}")

            # Step 3: Execute the SQL query
            db_result = await query_database_async(sql_query)

            # Check for database error
            if isinstance(db_result, str) and db_result.startswith("Lỗi khi truy vấn cơ sở dữ liệu:"):
                 # Return the specific error message
                 return db_result

            # Step 4: Send database results back to Gemini for synthesis
            # Convert DataFrame to string for Gemini
            db_result_str = db_result.to_string() if not db_result.empty else "Không tìm thấy dữ liệu."

            prompt_synthesis = f"""Bạn là một chatbot hỗ trợ khách hàng cho cửa hàng Growcera.
            Người dùng ban đầu đã hỏi: "{user_input}"
            Tôi đã thực thi truy vấn SQL sau:
            ```sql
            {sql_query}
            ```
            Và nhận được kết quả sau từ cơ sở dữ liệu:
            ---
            {db_result_str}
            ---
            Dựa vào kết quả truy vấn này, hãy tạo ra một câu trả lời thân thiện và dễ hiểu cho người dùng về câu hỏi ban đầu của họ.
            Nếu kết quả là "Không tìm thấy dữ liệu.", hãy thông báo cho người dùng biết.
            """
            print("Sending database results back to Gemini for synthesis.")
            final_response = await generate_content_async(prompt_synthesis)
            return final_response

        else:
            # If no SQL query, Gemini responded directly
            print("No SQL query detected, returning initial Gemini output.")
            return gemini_output

    except Exception as e:
        print(f"An error occurred during processing: {e}")
        return f"Xin lỗi, đã xảy ra lỗi trong quá trình xử lý yêu cầu của bạn: {e}"