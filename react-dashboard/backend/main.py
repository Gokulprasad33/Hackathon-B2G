from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

def ocean_rules_response(message: str) -> str:
    msg = message.lower()
    if any(word in msg for word in ["tide", "tides", "high tide"]):
        return "Next high tide is expected around 06:40–08:05 local time. Current tide status is moderate."
    if any(word in msg for word in ["pollution", "microplastic", "plastic"]):
        return "Pollution levels are currently moderate in your area. Microplastic concentration is around 45 particles/m³."
    if any(word in msg for word in ["temperature", "temp", "sea surface"]):
        return "Sea surface temperature is about 26.8 °C. Slight warming trend observed this week."
    if any(word in msg for word in ["fishing", "fish", "catch"]):
        return "Fishing conditions are fair today. Recommended zones: A and C. Avoid protected breeding areas."
    return "I’m your Ocean Intelligence Assistant. How can I help you today?"

@app.post("/chat")
async def chat(req: ChatRequest):
    reply = ocean_rules_response(req.message)
    return {"reply": reply}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
