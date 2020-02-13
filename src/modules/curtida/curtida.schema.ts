import * as mongoose from 'mongoose';
import { Postagem } from '../postagem/postagem.schema';
import { Usuario } from '../usuario/usuario.schema';

export const Curtida = new mongoose.Schema({
  postagem: Postagem,
  autor: Usuario,
  data: Date,
});
