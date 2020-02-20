import { Controller, Post, Body, Get } from '@nestjs/common';
import { Usuario } from './usuario.interface';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) {}

  @Post()
  async create(@Body() usuario: Usuario) {
    return this.service.create(usuario);
  }

  @Get()
  async findAll(): Promise<Usuario[]> {
    return this.service.findAll();
  }
}
