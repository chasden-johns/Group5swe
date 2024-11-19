import requests
from fastapi import APIRouter

router = APIRouter(prefix="/chai")

@router.post("/")
async def get_response():
    url = "https://api.chai-research.com/v1/chat/completions"

    payload = {
        "model": "chai_v1",
        "messages": [
            {
                "role": "user",
                "content": ""
            }
        ]
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "X-API_KEY": "c6012ff67ccd45c79a6e96c0ff8b5c16"
    }

    response = requests.post(url, json=payload, headers=headers)

    return response["choices"][0]["message"]["content"]