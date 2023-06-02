import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const Port = process.env.PORT || 5001
  const app = await NestFactory.create(AppModule);
  const cors=require("cors");
  const corsOptions ={
     origin:'*', 
     credentials:true,            //access-control-allow-credentials:true
     optionSuccessStatus:200,
  }
  app.use(cors(corsOptions))
  await app.listen(Port, ()=>console.log(`server on: ${Port}`));
}
bootstrap();
