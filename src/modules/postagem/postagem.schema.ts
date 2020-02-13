import * as mongoose from 'mongoose';
import { Comentario } from '../comentario/comentario.schema';
import { Curtida } from '../curtida/curtida.schema';
import { Usuario } from '../usuario/usuario.schema';

export const Postagem = new mongoose.Schema({
  titulo: String,
  conteudo: String,
  autor: Usuario,
  criacao: Date,
  desativacao: Date,
  comentarios: [Comentario],
  curtidas: [Curtida],
});
