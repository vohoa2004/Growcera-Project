import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

if not GOOGLE_API_KEY:
    raise EnvironmentError("GOOGLE_API_KEY not found in environment variables.")

# Configure Gemini API
try:
    genai.configure(api_key=GOOGLE_API_KEY)
    print("Gemini API configured.")
except Exception as e:
    print(f"Error configuring Gemini API: {e}")
    # Depending on your application needs, you might want to exit or handle this gracefully

# Initialize Gemini Model (Singleton pattern - create once)
try:
    # Dùng GenerativeModel thông thường cho cả sync và async
    gemini_model = genai.GenerativeModel('gemini-2.0-flash') # <<< Sửa thành GenerativeModel
    print("Gemini model loaded.")
except Exception as e:
    print(f"Error loading Gemini model: {e}")
    gemini_model = None

async def generate_content_async(prompt: str):
    """
    Generates content from Gemini asynchronously.
    Returns the response text or raises an exception.
    """
    if gemini_model is None:
        raise RuntimeError("Gemini model is not loaded.")

    try:
        # Sử dụng phương thức bất đồng bộ generate_content_async
        response = await gemini_model.generate_content_async(prompt) # <<< Sửa thành generate_content_async
        return response.text
    except Exception as e:
        # ... xử lý lỗi
        pass