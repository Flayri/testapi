import { Module, forwardRef } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { RolesModule } from 'src/roles/roles.module';
import { SignModule } from 'src/sign/sign.module';
import { UsersService } from 'src/users/users.service';
import { FilesModule } from 'src/files/files.module';
import { Images } from './images.model';
import { Comment } from 'src/comments/comments.model';

@Module({
  providers: [ImagesService],
  controllers: [ImagesController],
  imports:[ SequelizeModule.forFeature([Images,User,Comment]),
  RolesModule,forwardRef(()=>SignModule),FilesModule],
  exports:[ImagesService,]
})
export class ImagesModule {}
