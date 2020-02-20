import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './usuario.interface';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel('Usuario') private readonly model: Model<Usuario>) {}

  async create(usuario: Usuario): Promise<Usuario> {
    const newUsuario = new this.model(usuario);
    return newUsuario.save();
  }

  async findAll(): Promise<Usuario[]> {
    return this.model.find().exec();
  }
}
