import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Curtida } from './curtida.interface';
import { Postagem } from '../postagem/postagem.interface';
import { Comentario } from '../comentario/comentario.interface';

@Injectable()
export class CurtidaService {
  constructor(@InjectModel('Curtida') private readonly model: Model<Curtida>) {}

  // TODO permitir curtir comentario ou postagem
  async curtir(idPostagem: string): Promise<Curtida> {
    const usuarioLogado = { _id: '5e59c2dbfb6f7f5551b09a38' };
    const newCurtida = new this.model({
      autor: usuarioLogado,
      postagem: { _id: idPostagem },
    });
    return newCurtida.save();
  }

  async descurtir(item: Postagem | Comentario): Promise<void> {
    // TODO
    console.log(item);
  }
}
