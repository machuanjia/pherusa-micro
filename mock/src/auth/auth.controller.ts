import { Controller, Post, Response, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { User } from 'libs/db/src/models/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { ALL_PERMISSIONS } from 'src/constants/permissions';
import { resSuccess } from 'src/utils/response';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  // constructor(@InjectModel(User) private readonly model) {}

  @Post('/login')
  login(@Response() res) {
    res.cookie('authorization', 'hestia', {
      maxAge: 1000 * 10,
      httpOnly: true,
    });
    res.send(resSuccess(true));
  }

  @Get('/user')
  getInfo() {
    return resSuccess({
      majorKeyId:Math.random(),
      name: '小美',
      roles: ['admin'],
      permissions: ALL_PERMISSIONS,
    });
  }
}
