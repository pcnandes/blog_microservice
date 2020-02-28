import { Document } from 'mongoose';
import { Usuario } from '../usuario/usuario.interface';
// import { Usuario } from '../usuario/usuario.interface';

export interface Postagem extends Document {
  readonly titulo: string;
  readonly conteudo: string;
  // readonly autor: { _id: string };
  readonly autor: Usuario;
  readonly criacao: Date;
  readonly desativacao: Date;
  readonly tags: string[];
  // criar interface curtida
  readonly curtidas: [];
}
