import * as mongoose from 'mongoose';
// import { Postagem } from '../postagem/postagem.schema';
import { UsuarioSchema } from '../usuario/usuario.schema';

export const Curtida = new mongoose.Schema({
  // postagem: Postagem,
  autor: UsuarioSchema,
  data: Date,
});
