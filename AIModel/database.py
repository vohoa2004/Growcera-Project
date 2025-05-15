import os
from sqlalchemy import create_engine
from dotenv import load_dotenv
import pandas as pd
import asyncio

# Load environment variables
load_dotenv()

db_user = os.getenv("DB_USER")
db_pass = os.getenv("DB_PASS")
db_host = os.getenv("DB_HOST")
db_port = os.getenv("DB_PORT")
db_name = os.getenv("DB_NAME")

# Ensure all connection details are available
if not all([db_user, db_pass, db_host, db_port, db_name]):
    raise EnvironmentError("Database connection details not found in environment variables.")

# Create connection string
DATABASE_URL = f"mysql+pymysql://{db_user}:{db_pass}@{db_host}:{db_port}/{db_name}?ssl_disabled=false"

# Create database engine (Singleton pattern - create once)
try:
    engine = create_engine(DATABASE_URL)
    print("Database engine created successfully.")
except Exception as e:
    print(f"Error creating database engine: {e}")
    engine = None # Set engine to None if creation fails

async def query_database_async(sql_query: str):
    """
    Executes an SQL query asynchronously using asyncio.to_thread.
    Returns DataFrame or error string.
    """
    if engine is None:
        return "Lỗi: Không kết nối được cơ sở dữ liệu."

    try:
        # Run the synchronous read_sql_query in a separate thread
        df_result = await asyncio.to_thread(pd.read_sql_query, sql_query, engine)
        print(f"Executed SQL query: {sql_query}")
        return df_result
    except Exception as e:
        print(f"Error executing SQL query: {e}")
        return f"Lỗi khi truy vấn cơ sở dữ liệu: {e}"