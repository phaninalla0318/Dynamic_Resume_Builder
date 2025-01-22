from fastapi import APIRouter, HTTPException,  File , UploadFile
from models.resume import Resume 
from database import resumes_collection,users_collection
from bson import ObjectId
import os
import datetime

from typing import List

router = APIRouter()
upload_folder = "resume_uploads"
os.makedirs(upload_folder , exist_ok=True)

@router.post("/createuser",tags=["curl"])
def create_resume(resume: Resume):
    resume_data = resume.__dict__
    result = resumes_collection.insert_one(resume_data)
    return {"message": "Resume created successfully", "resume_id": str(result.inserted_id)}

@router.get("/getuser{resume_id}", response_model=List[Resume],tags=["curl"])
def get_resumes(resume_id: str):
    resumes = list(resumes_collection.find({"_id": ObjectId(resume_id)}))
    if not resumes:
        raise HTTPException(status_code=404, detail="No resumes found")
    return resumes

@router.put("/update/{resume_id}", tags=["curl"])
def update_resume(resume_id: str, resume: Resume ):
    update_data = resumes_collection.update_one({"_id":ObjectId(resume_id)}, {"$set":resume.__dict__ })
    if update_data.matched_count==0:
        raise HTTPException(status_code=400, detail="No fields updated")

    return  {"message": "Resume updated successfully"}

@router.post("/saveresume", tags=["curl"])
async def save_resume(user_id:str, files: UploadFile = File(...)):
    print("save_resume",files.filename)
    fileName = files.filename
    filePath = os.path.join(upload_folder,fileName)
    date_time = datetime.datetime.now()
    data = {
        "file_name": fileName,
        "downloaded_date":date_time,
        "user_id": user_id
    }
    
    resumes_collection.insert_one(data)
    
    with open(filePath , "wb") as f:
        content = await files.read()
        f.write(content)

    
    return fileName

@router.get("/resumes")
async def get_resumes(user_id: str):
    # Query the database to fetch resumes associated with the user ID
    resumes = users_collection.query(Resume).filter(Resume.user_id == user_id).all()

    if not resumes:
        return {"message": "No resumes found."}

    return resumes

   
# get resumes 
# filehandling




