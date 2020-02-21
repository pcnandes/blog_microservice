import * as mongoose from 'mongoose';
// import { Comentario } from '../comentario/comentario.schema';
// import { Curtida } from '../curtida/curtida.schema';
// import { UsuarioSchema } from '../usuario/usuario.schema';

export const PostagemSchema = new mongoose.Schema({
  titulo: String,
  conteudo: String,
  // autor: UsuarioSchema,
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  criacao: { type: Date, default: Date.now },
  tags: [String],
  // comentarios: [Comentario],
  // curtidas: [Curtida],
  // qtdCurtidas: Number,
  curtidas: [
    {
      autorCurtida: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
      },
      data: { type: Date, default: Date.now },
    },
  ],
});
