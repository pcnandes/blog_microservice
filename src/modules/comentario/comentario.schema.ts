import * as mongoose from 'mongoose';
import { Postagem } from '../postagem/postagem.schema';
import { Usuario } from '../usuario/usuario.schema';

export const Comentario = new mongoose.Schema({
  comentario: String,
  postagem: Postagem,
  autor: Usuario,
  criacao: { type: Date, default: Date.now },
  desativacao: Date,
});
