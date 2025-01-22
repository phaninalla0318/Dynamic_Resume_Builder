from pydantic import BaseModel
import uuid



class UserCreate(BaseModel):
    username: str
    email: str
    password: str
    


class UserLogin(BaseModel):
    email: str
    password: str


class UserInDB(UserCreate):
    hashed_password: str
    

    
