import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groups: GroupsService) {}

  @Post('create')
  create(@Body() body: { id: string; name: string; creator: string }) {
    const { id, name, creator } = body;
    const g = this.groups.createGroup(id, name, creator);
    if (!g) return { error: 'Group already exists' };
    return g;
  }

  @Post(':id/join')
  join(@Param('id') id: string, @Body() body: { email: string }) {
    const g = this.groups.addMember(id, body.email);
    if (!g) return { error: 'Group not found' };
    return g;
  }

  @Get()
  list() {
    return this.groups.listGroups();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.groups.getGroup(id) ?? { error: 'Group not found' };
  }
}
