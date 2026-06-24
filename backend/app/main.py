from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas.login_schema import LoginCreate
from app.api.routes.login_route import router as LoginRoute
app = FastAPI()

app.add_middleware(
    CORSMiddleware, 
    allow_origins=['http://localhost:4200'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

@app.get('/')
async def sayHi():
    return {'message': 'Hello, User !'}

app.include_router(LoginRoute)