from pydantic import BaseModel, ValidationError
from typing import List, Optional
from datetime import datetime
from pydantic import Field
from zoneinfo import ZoneInfo





class Resume(BaseModel):
    name: str
    email: str
    phone: int
    website: Optional[str] = None
    degree: str
    college: str
    startYear : int
    endYear : int
    jobTitle: str
    company: str
    startDate : int
    endDate: int
    skills: str
    projects: str
    certifications: str
    languages: List[str]  
    hobbies: List[str]  
    references: str
    
# class resume(BaseModel):
#     username: str
#     pdfName: str
#     time: datetime = Field(default_factory=lambda: datetime.now(ZoneInfo("Asia/chennai")))
    
    
   