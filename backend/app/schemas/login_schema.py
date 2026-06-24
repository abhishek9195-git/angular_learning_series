from pydantic import BaseModel

class LoginCreate(BaseModel):
    email: str 
    password: str 