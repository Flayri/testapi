import { Module, forwardRef } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from './comments.model';
import { Images } from 'src/images/images.model';
import { RolesModule } from 'src/roles/roles.module';
import { SignModule } from 'src/sign/sign.module';
import { User } from 'src/users/users.model';

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
  imports:[
    SequelizeModule.forFeature([Comment,Images,User]),RolesModule,forwardRef(()=>SignModule)
  ],
  exports:[CommentsService,]
})
export class CommentsModule {}
