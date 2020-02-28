import { Controller, Post, Body, Get, Put } from '@nestjs/common';
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

  @Put('curtir')
  async curtir(@Body() post: Postagem) {
    return this.curtidaService.curtir(post);
  }

  @Get()
  async findAll(): Promise<Postagem[]> {
    return this.service.findAll();
  }
}
