import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/CreateCommentDto';
import { JwtAuthGuard } from 'src/sign/jwt-auth.guard';

@Controller('/api/image')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}
    
    @Get(':idi/comment')
    findAll(@Param('idi') idi: string) {
      return this.commentsService.findAll(idi);
    }

    @Get('/comment/all/admin')
    findAlli() {
      return this.commentsService.findAlli();
    }

    @UseGuards(JwtAuthGuard)
    @Post(':idi/comment')
    create(@Param('idi') idi: string,@Body() createCommentDto:CreateCommentDto) {
      return this.commentsService.create(createCommentDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':idi/comment/:idc')
    remove(@Param('idi') idi: string,@Param('idc') idc:string) {
      return this.commentsService.remove(+idc);
    }
}
