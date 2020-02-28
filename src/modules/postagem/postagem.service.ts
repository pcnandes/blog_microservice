import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Postagem } from './postagem.interface';
import { Model } from 'mongoose';

@Injectable()
export class PostagemService {
  constructor(
    @InjectModel('Postagem') private readonly model: Model<Postagem>,
  ) {}

  async create(usuario: Postagem): Promise<Postagem> {
    const newUsuario = new this.model(usuario);
    return newUsuario.save();
  }

  async findAll(): Promise<Postagem[]> {
    return (
      this.model
        .find()
        .populate('autor', 'nome')
        // .populate('autorCurtida', 'nome')
        // .populate('autor', 'nome')
        // .populate('autorCurtida', 'nome')
        .exec()
    );
  }
}
