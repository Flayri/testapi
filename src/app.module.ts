import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [],
    autoLoadModels:true,
  }),
    UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
