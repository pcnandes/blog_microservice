import * as mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  senha: {
    type: String,
  },
  criacao: { type: Date, default: Date.now },
});
