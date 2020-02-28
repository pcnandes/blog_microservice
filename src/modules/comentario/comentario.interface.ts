import { Document } from 'mongoose';
import { Usuario } from '../usuario/usuario.interface';
import { Postagem } from '../postagem/postagem.interface';

export interface Comentario extends Document {
  readonly autor: Usuario;
  readonly data: Date;
  readonly comentario: string;
  readonly postagem: Postagem;
}
