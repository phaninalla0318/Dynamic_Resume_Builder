from fastapi import APIRouter, HTTPException,  File , UploadFile ,Form
from models.resume import Resume 
from fastapi.responses import JSONResponse ,StreamingResponse

from database import resumes_collection,users_collection
from bson import ObjectId
import os
import datetime

from typing import List
import json

router = APIRouter()
upload_folder = "resume_uploads"
os.makedirs(upload_folder , exist_ok=True)


@router.post("/saveresume", tags=["curl"])
async def save_resume(user_id:str = Form(...), files: UploadFile = File(...),resume:str= Form(...)):
    # print("save_resume",files.filename)
    resume_dict = json.loads(resume) 
    print("resume_dict000000000---->",resume_dict)
    fileName = files.filename
    filePath = os.path.join(upload_folder,fileName)
    date_time = datetime.datetime.now()
    data = {
        
        "downloaded_date":date_time,
        "user_id": user_id,
         **resume_dict
    }
    
    resumes_collection.insert_one(data)
    
    with open(filePath , "wb") as f:
        content = await files.read()
        f.write(content)

    
    return fileName


@router.get("/resumes/", tags=["curl"])
async def get_resumes(user_id: str): 
    user = users_collection.find_one({"user_id": user_id})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    resumes = list(resumes_collection.find({"user_id": user_id},{"_id":0}))  
    if not resumes:
        raise HTTPException(status_code=404, detail="No resumes found for this user")
    return resumes



@router.delete("/delete_resumes/", tags=["curl"])
async def delete_resume(user_id: str, pdfname: str):

    delete_result = resumes_collection.delete_one({"user_id": user_id, "pdfname": pdfname})

    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Resume not found")

    return {"message": f"Resume '{pdfname}' deleted successfully"}


    
# get resumes 
# filehandling





