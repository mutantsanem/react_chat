import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { scryptSync, randomBytes } from 'crypto';

type User = {
  name: string;
  email: string;
  passwordHash: string;
  salt: string;
};

@Injectable()
export class AuthService {
  private users = new Map<string, User>();

  async signup(name: string, email: string, password: string) {
    const key = email.toLowerCase();
    if (this.users.has(key)) throw new ConflictException('User already exists');

    const salt = randomBytes(16).toString('hex');
    const passwordHash = scryptSync(password, salt, 64).toString('hex');

    const user: User = { name, email: key, passwordHash, salt };
    this.users.set(key, user);

    return { name: user.name, email: user.email };
  }

  async login(email: string, password: string) {
    const key = email.toLowerCase();
    const user = this.users.get(key);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const hash = scryptSync(password, user.salt, 64).toString('hex');
    if (hash !== user.passwordHash) throw new UnauthorizedException('Invalid credentials');

    // simple token for dev purposes
    const token = Buffer.from(`${user.email}:${Date.now()}`).toString('base64');
    return { token, user: { name: user.name, email: user.email } };
  }
}
