import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { User } from './users/users.model';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { SignModule } from './sign/sign.module';
import { ImagesModule } from './images/images.module';
import { FilesModule } from './files/files.module';
import { CommentsModule } from './comments/comments.module';
import { Images } from './images/images.model';
import { Comment } from './comments/comments.model';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'testapi',
    models: [User, Role, UserRoles, Images, Comment],
    autoLoadModels:true,
  }),
  UsersModule,
  RolesModule,
  SignModule,
  ImagesModule,
  FilesModule,
  CommentsModule,],
  controllers: [AppController,],
  providers: [AppService, ],
})
export class AppModule {}
