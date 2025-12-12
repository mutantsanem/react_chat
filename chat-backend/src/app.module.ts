import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ChatGateway } from './chat/chat.gateway';
import { GroupsService } from './chat/groups.service';
import { GroupsController } from './chat/groups.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController, GroupsController],
  providers: [AppService, AuthService, ChatGateway, GroupsService],
})
export class AppModule {}
