from app.schemas.login_schema import LoginCreate
from fastapi.responses import JSONResponse

class LoginService:

    async def validate(self, payload: LoginCreate):
        email, password = payload.email, payload.password

        print(f"Email: {email}, Password: {password}")

        if password == "root":
            return JSONResponse(
                status_code=200,
                content={
                    'message': 'success'
                }
            )
        else:
            return JSONResponse(
                status_code=400,
                content={
                    'serverError': 'Invalid credentials'
                }
            )
        