import { Document } from 'mongoose';
import { Usuario } from '../usuario/usuario.interface';
import { Postagem } from '../postagem/postagem.interface';
import { Comentario } from '../comentario/comentario.interface';

export interface Curtida extends Document {
  readonly autor: Usuario;
  readonly data: Date;
  readonly postagem: Postagem;
  readonly comentario: Comentario;
}
