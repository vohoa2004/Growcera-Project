from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import os

from chatbot_logic import process_chatbot_request
from database import engine
from gemini_service import gemini_model

app = FastAPI()

# Bỏ chặn CORS cho tất cả origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ⚠️ Trong production, bạn nên giới hạn domain cụ thể nếu cần bảo mật
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
async def read_root():
    db_status = "Connected" if engine else "Disconnected"
    gemini_status = "Ready" if gemini_model else "Not Loaded"
    return {"message": "Growcera Chatbot API is running!", "database_status": db_status, "gemini_status": gemini_status}

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    user_message = request.message
    print(f"Received message: {user_message}")

    if engine is None or gemini_model is None:
         raise HTTPException(status_code=503, detail="Chatbot services are not available. Database or Gemini failed to initialize.")

    try:
        chatbot_response = await process_chatbot_request(user_message)
        return {"response": chatbot_response}
    except Exception as e:
        print(f"Error processing chat request: {e}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {e}")

if __name__ == "__main__":
    print("Starting FastAPI server...")
    uvicorn.run(app, host="0.0.0.0", port=8000)
