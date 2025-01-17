from pydantic import BaseModel
from typing import List, Optional

class PersonalInformation(BaseModel):
    full_name: str
    email: str
    phone_number: int
    website: Optional[str] = None

class Education(BaseModel):
    degree: str
    college: str
    graduation_year: int

class WorkExperience(BaseModel):
    job_title: str
    company: str
    start_date: str
    end_date: str
    description: str

class Resume(BaseModel):
    personal_information: PersonalInformation
    education: List[Education]
    work_experience: List[WorkExperience]
    skills: List[str]
    projects: List[str]
    certifications: List[str]
    languages: List[str]
    hobbies: List[str]
    references: List[str]