import { CreateUserDto, UpdateUserDto, User } from '@app/common';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService implements OnModuleInit {
  private readonly users: User[];

  onModuleInit() {}

  create(createUserDto: CreateUserDto) {
    const user: User = {
      id: randomUUID(),
      ...createUserDto,
      subscribed: false,
      socilaMedia: {},
    };

    this.users.push(user);

    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
