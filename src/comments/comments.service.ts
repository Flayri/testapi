import { Injectable } from '@nestjs/common';
import { Comment } from './comments.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCommentDto } from './dto/CreateCommentDto';

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment) private commentRepository : typeof Comment){}

    async create(dto:CreateCommentDto){
        const comment = await this.commentRepository.create(dto)
        return comment; 
    }

    async remove(id:number){
        const comment = await this.commentRepository.findByPk(id)
        await comment.destroy()
        return true
    }

    async findAll(imagesId:string){
        const comment = await this.commentRepository.findAll({where:{imagesId}})
        return comment; 
    }

    async findAlli(){
        const comment = await this.commentRepository.findAll({attributes: ['id', 'text', 'imagesId', 'createdAt'],order:['id']})
        return comment; 
    }
}
