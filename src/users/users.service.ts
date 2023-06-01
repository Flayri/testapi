import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { RolesService } from 'src/roles/roles.service';
import * as bcrypt from 'bcrypt';
import { SignUserDtoIn } from './dto/SignUserDtoIn';
import { AddRoleDto } from './dto/AddRoleDto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService){}

    async createUser(dto: SignUserDtoIn){
        dto.password= await bcrypt.hash(dto.password, 10);
        const user = await this.userRepository.create(dto)
        const role = await this.roleService.getRoleByValue("User")
        await user.$set('roles',[role.id])
        user.roles= [role]
        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll({include:{all:true},order:['id']});
        return users;
    }

    async getUserByLogin(login:string){
        const user = await this.userRepository.findOne({where:{login},include:{all:true}});
        return user;
    }

    async addRole(dto: AddRoleDto){
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if(role && user ){
            await user.$add('role',role.id);
            return dto
        }
        throw new HttpException('Пользователь или роль не найдены',HttpStatus.NOT_FOUND);
    }

    async delRole(dto: AddRoleDto){
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if(role && user ){
            await user.$remove('role',role.id);
            return dto
        }
        throw new HttpException('Пользователь или роль не найдены',HttpStatus.NOT_FOUND);
    }
}
