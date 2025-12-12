import { Injectable } from '@nestjs/common';

type Group = {
  id: string;
  name: string;
  members: Set<string>;
};

@Injectable()
export class GroupsService {
  private groups = new Map<string, Group>();

  createGroup(id: string, name: string, creatorEmail: string) {
    if (this.groups.has(id)) return null;
    const g: Group = { id, name, members: new Set([creatorEmail]) };
    this.groups.set(id, g);
    return { id: g.id, name: g.name, members: Array.from(g.members) };
  }

  addMember(groupId: string, email: string) {
    const g = this.groups.get(groupId);
    if (!g) return null;
    g.members.add(email);
    return { id: g.id, name: g.name, members: Array.from(g.members) };
  }

  removeMember(groupId: string, email: string) {
    const g = this.groups.get(groupId);
    if (!g) return null;
    g.members.delete(email);
    return { id: g.id, name: g.name, members: Array.from(g.members) };
  }

  listGroups() {
    return Array.from(this.groups.values()).map((g) => ({ id: g.id, name: g.name, members: Array.from(g.members) }));
  }

  getGroup(groupId: string) {
    const g = this.groups.get(groupId);
    if (!g) return null;
    return { id: g.id, name: g.name, members: Array.from(g.members) };
  }
}
