import { Module, forwardRef } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';
import { Role } from './roles.model';
import { SignModule } from 'src/sign/sign.module';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports:[ SequelizeModule.forFeature([Role,User, UserRoles ]),RolesModule,forwardRef(()=>SignModule)],
  exports:[RolesService]
})
export class RolesModule {}
