import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/createRoleDto';
import { Roles } from 'src/sign/roles-auth.decorator';
import { RolesGuard } from 'src/sign/roles.guard';

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService){}

    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto:CreateRoleDto){
        return this.roleService.createRole(dto)
    }

    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Get('/:value')
    getByValue(@Param('value') value:string){
        return this.roleService.getRoleByValue(value);
    }

    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Get()
    findAll() {
      return this.roleService.findAll();
    }

}
