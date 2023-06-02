import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/CreateCommentDto';

@Controller('/api/image')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}
    
    @Get(':idi/comment')
    findAll(@Param('idi') idi: string) {
      return this.commentsService.findAll(idi);
    }

    @Post(':idi/comment')
    create(@Param('idi') idi: string,@Body() createCommentDto:CreateCommentDto) {
      return this.commentsService.create(createCommentDto);
    }

    @Delete(':idi/comment/:idc')
    remove(@Param('idi') idi: string,@Param('idc') idc:string) {
      return this.commentsService.remove(+idc);
    }
}
