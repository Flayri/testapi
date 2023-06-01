import { Injectable } from '@nestjs/common';
import { Images } from './images.model';
import { FilesService } from 'src/files/files.service';
import { InjectModel } from '@nestjs/sequelize';
import { ImageDtoIn } from './dto/ImagesDtoIn';

@Injectable()
export class ImagesService {

    constructor(@InjectModel(Images) private imagesRepository: typeof Images, private fileService: FilesService){}


    async create(dto:ImageDtoIn){
        const images = await this.imagesRepository.create(dto)
    }

    async remove(id: number) {
        const images = await this.imagesRepository.findByPk(id)
        await images.destroy()
        return true
    }

    async findAll() {
        const images = await this.imagesRepository.findAll({include:{all:true},order:['id']})
        return images
    }

    async findOne(id: number) {
        const images = await this.imagesRepository.findByPk(id)
        return images
    }

}
