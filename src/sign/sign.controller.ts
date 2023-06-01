import { Body, Controller, Post } from '@nestjs/common';
import { SignService } from './sign.service';
import { SignUserDtoIn } from 'src/users/dto/SignUserDtoIn';

@Controller('account')
export class SignController {

    constructor(private signService: SignService ){}

    @Post('/signin')
    login(@Body() userDto: SignUserDtoIn){
        return this.signService.login(userDto)
    }

    @Post('/signup')
    registration(@Body() userDto: SignUserDtoIn){
        return this.signService.registration(userDto)
    }
}
