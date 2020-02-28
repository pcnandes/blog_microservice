import * as mongoose from 'mongoose';
import { CurtidaSchema } from '../curtida/curtida.schema';
// import { Comentario } from '../comentario/comentario.schema';
// import { Curtida } from '../curtida/curtida.schema';
// import { UsuarioSchema } from '../usuario/usuario.schema';

export const PostagemSchema = new mongoose.Schema({
  titulo: String,
  conteudo: String,
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  criacao: { type: Date, default: Date.now },
  tags: [String],
  // comentarios: [Comentario],
  /*curtidas: [
    {
      autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
      },
      data: { type: Date, default: Date.now },
    },
  ],*/
  // curtidas: [CurtidaSchema],
});
