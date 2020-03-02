import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { Postagem } from './postagem.interface';
import { PostagemService } from './postagem.service';
import { CurtidaService } from '../curtida/curtida.service';

@Controller('postagem')
export class PostagemController {
  constructor(
    private readonly service: PostagemService,
    private readonly curtidaService: CurtidaService,
  ) {}

  @Post()
  async create(@Body() post: Postagem) {
    return this.service.create(post);
  }

  @Put('curtir/:id')
  async curtir(@Param('id') idPostagem) {
    return this.curtidaService.curtir(idPostagem);
  }

  @Get()
  async findAll(): Promise<Postagem[]> {
    return this.service.findAll();
  }
}
