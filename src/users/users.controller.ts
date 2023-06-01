import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignUserDtoIn } from './dto/SignUserDtoIn';
import { UsersService } from './users.service';
import { AddRoleDto } from './dto/AddRoleDto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    create(@Body() userDto: SignUserDtoIn){
        return this.usersService.createUser(userDto)
    }

    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }   

    @Post('/role')
    addRole(@Body() dto:AddRoleDto){
        return this.usersService.addRole(dto);
    }  

    @Post('/role/del')
    delRole(@Body() dto:AddRoleDto){
        return this.usersService.delRole(dto);
    }   
}
