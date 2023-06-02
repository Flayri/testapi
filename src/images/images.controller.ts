import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UsePipes, UseGuards, ValidationPipe, UseInterceptors,UploadedFile } from '@nestjs/common';
import { ImageDtoIn } from './dto/ImagesDtoIn';
import { ImagesService } from './images.service';
import { JwtAuthGuard } from 'src/sign/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/api/image')
export class ImagesController {
    constructor(private readonly imagesService: ImagesService) {}

    
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() imagesdtoin: ImageDtoIn) {
        return this.imagesService.create(imagesdtoin);
    }

    
    @Get()
    findAll() {
        return this.imagesService.findAll();
    }

    //@UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.imagesService.findOne(+id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.imagesService.remove(+id);
    }
}
