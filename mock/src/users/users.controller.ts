import { Controller, Delete, Get } from '@nestjs/common';
// import { User } from 'libs/db/src/models/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { resSuccess } from 'src/utils/response';

// @Crud({
//   model: User,
// })
@Controller('users')
@ApiTags('用户')
export class UsersController {
  // constructor(@InjectModel(User) private readonly model) {}
  @Get('')
  getUsers() {
    return resSuccess({
      total: 300,
      data: [
        {
          _id: '5fc5a2a1b05854e42b790d97',
          username: 'user1',
          password: 'pass1',
          __v: 0,
        },
        {
          _id: '5fc5a2a7b05854e42b790d98',
          username: 'user1',
          password: 'pass1',
          __v: 0,
        },
        {
          _id: '5fc5a354b05854e42b790d99',
          username: 'user1',
          password: 'pass1',
          __v: 0,
        },
      ],
      lastPage: 1,
      page: 1,
    });
  }

  @Get('/:id')
  getUserDetail() {
    return resSuccess({
      _id: '5fc5a354b05854e42b790d99',
      username: 'user1',
      password: 'pass1',
      __v: 0,
    });
  }

  @Delete('/:id')
  deleteUser() {
    return resSuccess(true);
  }
}
