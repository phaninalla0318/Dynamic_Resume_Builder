from pydantic import BaseModel, ValidationError
from typing import List, Optional
from datetime import datetime
from pydantic import Field
from zoneinfo import ZoneInfo

class Resume(BaseModel):
    name: str
    email: str
    phone: str
    website: Optional[str] = None
    degree: str
    college: str
    startYear : str
    endYear : str
    jobTitle: str
    company: str    
    startDate : str
    endDate: str
    skills: str
    projects: str
    certifications: str
    languages: str  
    hobbies: str
    references: str
    
    def dict(Resume):
        return Resume.dict()
    
# class resume(BaseModel):
#     username: str
#     pdfName: str
#     time: datetime = Field(default_factory=lambda: datetime.now(ZoneInfo("Asia/chennai")))
    
    
   