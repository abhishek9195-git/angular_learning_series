from fastapi import APIRouter
from app.schemas.login_schema import LoginCreate
from fastapi.responses import JSONResponse
from app.services.login_service import LoginService
from fastapi import Depends
from app.dependency import get_login_service

router = APIRouter(prefix='/login')

@router.post('')
async def validate(payload: LoginCreate, service: LoginService = Depends(get_login_service)):
    result = await service.validate(payload)
    return result 