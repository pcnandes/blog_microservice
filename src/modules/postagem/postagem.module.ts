import { Module } from '@nestjs/common';
import { PostagemService } from './postagem.service';
import { PostagemController } from './postagem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostagemSchema } from './postagem.schema';
import { UsuarioSchema } from '../usuario/usuario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Postagem', schema: PostagemSchema },
      { name: 'Usuario', schema: UsuarioSchema },
    ]),
  ],
  providers: [PostagemService],
  controllers: [PostagemController],
})
export class PostagemModule {}
