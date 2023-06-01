import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common';
import { SignService } from './sign.service';
import { SignController } from './sign.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [SignService],
  controllers: [SignController],
  imports:[
    forwardRef(()=>UsersModule), JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'whkp',
      signOptions:{
        expiresIn:'8h'
      }
    })
  ],
  exports:[SignService,JwtModule]
})
export class SignModule {}
