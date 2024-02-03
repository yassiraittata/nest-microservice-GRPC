import { CreateUserDto, UpdateUserDto, User } from '@app/common';
import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { NotFoundError } from 'rxjs';

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
    return { users: this.users };
  }

  findOne(id: string) {
    return this.users.find((el) => el.id === id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...updateUserDto,
      };

      return this.users[userIndex];
    }
    throw new NotFoundException('user was not found!')
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
