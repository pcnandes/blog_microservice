import * as mongoose from 'mongoose';

export const CurtidaSchema = new mongoose.Schema({
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  data: { type: Date, default: Date.now },
  postagem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Postagem',
  },
});
