from pydantic import BaseModel
from typing import List

class Resume(BaseModel):
    name: str
    email: str
    phoneno: int
    job_title: str
    company_name: str
    start_date: str
    end_date: str
    description: str
    school_name: str
    degree: str
    skills: List[str]
    languages: List[str]
    
