from fastapi import FastAPI
from routes.auth import router as auth_router 
from routes.resume import router as resume_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth_router,prefix="/auth")
app.include_router(resume_router,prefix="/resume")









