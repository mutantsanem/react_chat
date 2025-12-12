import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

type SignupDto = { name: string; email: string; password: string };
type LoginDto = { email: string; password: string };

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: SignupDto) {
    const { name, email, password } = body;
    return this.authService.signup(name, email, password);
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    const { email, password } = body;
    return this.authService.login(email, password);
  }
}
