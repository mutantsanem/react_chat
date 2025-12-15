import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, ChatGateway],
})
export class AppModule {}
