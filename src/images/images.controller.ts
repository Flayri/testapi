import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UsePipes, UseGuards, ValidationPipe } from '@nestjs/common';
import { ImageDtoIn } from './dto/ImagesDtoIn';
import { ImagesService } from './images.service';

@Controller('/api/image')
export class ImagesController {
    constructor(private readonly imagesService: ImagesService) {}

    @Post()
    create(@Body() imagesdtoin: ImageDtoIn) {
        return this.imagesService.create(imagesdtoin);
    }

    @Get()
    findAll() {
        return this.imagesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.imagesService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.imagesService.remove(+id);
    }
}
