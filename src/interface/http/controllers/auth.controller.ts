import { Post, Body, Controller } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() body) {
        return this.authService.login(body.login, body.password);
    }
}