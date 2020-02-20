import { Controller, Post, Body, Get } from '@nestjs/common';
import { Postagem } from './postagem.interface';
import { PostagemService } from './postagem.service';

@Controller('postagem')
export class PostagemController {
  constructor(private readonly service: PostagemService) {}

  @Post()
  async create(@Body() post: Postagem) {
    return this.service.create(post);
  }

  @Get()
  async findAll(): Promise<Postagem[]> {
    return this.service.findAll();
  }
}
