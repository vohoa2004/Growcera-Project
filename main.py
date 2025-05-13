from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn
import os

# Import your chatbot logic
from chatbot_logic import process_chatbot_request
# Ensure services are initialized (they are initialized on import due to the way they are written)
from database import engine
from gemini_service import gemini_model

# Create FastAPI app instance
app = FastAPI()

# Pydantic model for the request body
class ChatRequest(BaseModel):
    message: str

# --- API Endpoints ---

@app.get("/")
async def read_root():
    """Basic endpoint to check if the API is running."""
    db_status = "Connected" if engine else "Disconnected"
    gemini_status = "Ready" if gemini_model else "Not Loaded"
    return {"message": "Growcera Chatbot API is running!", "database_status": db_status, "gemini_status": gemini_status}

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    """Endpoint to receive user messages and return chatbot responses."""
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

# Optional: Add startup and shutdown events for the engine if needed for connection pooling management
# @app.on_event("startup")
# async def startup_event():
#     pass # Your engine is created on import now

# @app.on_event("shutdown")
# async def shutdown_event():
#     if engine:
#         engine.dispose() # Properly close connections
#         print("Database engine disposed.")


if __name__ == "__main__":
    # To run the app locally for testing
    # You need to run this file directly
    # In a production environment, you would use 'uvicorn main:app --host 0.0.0.0 --port 80'
    print("Starting FastAPI server...")
    uvicorn.run(app, host="0.0.0.0", port=8000)