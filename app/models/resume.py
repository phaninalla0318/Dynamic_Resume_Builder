from pydantic import BaseModel, ValidationError
from typing import List, Optional

class Resume(BaseModel):
    full_name: str
    email: str
    phone_number: int
    website: Optional[str] = None
    degree: str
    college: str
    StartingDate: int
    EndingDate: int
    job_title: str
    company: str
    start_date: str
    end_date: str
    description: str
    education: List[str]  
    work_experience: List[str]  
    skills: str
    projects: str
    certifications: str
    languages: str
    hobbies: str
    references: str