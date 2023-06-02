import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SignUserDtoIn } from './dto/SignUserDtoIn';
import { UsersService } from './users.service';
import { AddRoleDto } from './dto/AddRoleDto';
import { Roles } from 'src/sign/roles-auth.decorator';
import { RolesGuard } from 'src/sign/roles.guard';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() userDto: SignUserDtoIn){
        return this.usersService.createUser(userDto)
    }

    // @Roles("Admin")
    // @UseGuards(RolesGuard)
    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }   

    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto:AddRoleDto){
        return this.usersService.addRole(dto);
    }  

    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Post('/role/del')
    delRole(@Body() dto:AddRoleDto){
        return this.usersService.delRole(dto);
    }   
}
