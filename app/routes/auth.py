from fastapi import APIRouter, HTTPException
from models.user import UserCreate, UserLogin
from utils import hash_password, verify_password
from database import users_collection
import uuid

router = APIRouter()

# @router.post("/register",tags=["Authenticate"])
# async def register_user(user: UserCreate):
#     existing_user = users_collection.find_one({"email": user.email})
#     if existing_user:
#         raise HTTPException(status_code=400, detail="Email already registered")
    
#     hashed_password = hash_password(user.password)
#     new_user = UserInDB(**user.dict(), hashed_password=hashed_password)
#     users_collection.insert_one(new_user.dict())
    
#     return {"message": "User registered successfully"}

# @router.post("/register", tags=["Authenticate"])
# async def register_user(user: UserCreate):
#     existing_user = users_collection.find_one({"email": user.email})
#     if existing_user:
#         raise HTTPException(status_code=400, detail="Email already registered")
    
#     hashed_password = hash_password(user.password)
#     new_user_id = str(uuid.uuid1())  # Generate a unique user ID
#     new_user = UserInDB(**user.dict(), hashed_password=hashed_password)
#     users_collection.insert_one(new_user.dict())    
    
#     return {"message": "User  registered successfully"}
@router.post("/register")
async def register(user: UserCreate):
    existing_user = users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = hash_password(user.password)
    user_id = str(uuid.uuid1()) 
    user_data = user.dict()  
    user_data["user_id"] = user_id
    users_collection.insert_one(user_data)
    return {"message": "User registered successfully"}



@router.post("/login",tags=["Authenticate"])
def login_user(user: UserLogin):
    db_user = users_collection.find_one({"email": user.email})
    print(db_user)
    if not db_user:
        raise HTTPException(status_code=401, detail="No user found with this email")
    
    if user.password != db_user["password"]:
        raise HTTPException(status_code=401, detail="Wrong password")
    
    return {"status" :"login successfull"}
  
