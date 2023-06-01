import { HttpException, HttpStatus, Injectable,UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignUserDtoIn } from 'src/users/dto/SignUserDtoIn';
import { User } from 'src/users/users.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignService {

    constructor(private userService: UsersService,
        private jwtService: JwtService){}

    async login(userDto:SignUserDtoIn){
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration( userDto: SignUserDtoIn){
        const candidate = await this.userService.getUserByLogin(userDto.login)
        if (candidate) {
            throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 10)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user: User){
        const payload = {login: user.login, id: user.id, roles:user.roles}
        return {
            userId: user.id,
            login: true,
            token: this.jwtService.sign(payload)
        }
    }
    private async validateUser(userDto: SignUserDtoIn) {
       const user = await this.userService.getUserByLogin(userDto.login);
       const passwordEquals = await bcrypt.compare(userDto.password,user.password);
       if(user && passwordEquals){
           return user;
       }
       throw new UnauthorizedException({message:'Некоррекный email или пароль'})
    }

}
