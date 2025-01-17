from fastapi import APIRouter,Request, HTTPException, status
from models.resume import Resume
from database import resumes_collection
from bson import ObjectId
from typing import List

router = APIRouter()



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

# get resumes 
# filehandling




