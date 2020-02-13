import * as mongoose from 'mongoose';

export const Usuario = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  criacao: { type: Date, default: Date.now },
});
