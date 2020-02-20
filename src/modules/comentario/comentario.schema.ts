import * as mongoose from 'mongoose';
// import { Postagem } from '../postagem/postagem.schema';
import { UsuarioSchema } from '../usuario/usuario.schema';

export const Comentario = new mongoose.Schema({
  comentario: String,
  // postagem: Postagem,
  autor: UsuarioSchema,
  criacao: { type: Date, default: Date.now },
  desativacao: Date,
});
