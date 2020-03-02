import { Module } from '@nestjs/common';
import { PostagemService } from './postagem.service';
import { PostagemController } from './postagem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostagemSchema } from './postagem.schema';
import { UsuarioSchema } from '../usuario/usuario.schema';
import { CurtidaModule } from '../curtida/curtida.module';
import { CurtidaService } from '../curtida/curtida.service';
import { CurtidaSchema } from '../curtida/curtida.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Postagem', schema: PostagemSchema },
      { name: 'Usuario', schema: UsuarioSchema },
      // TODO por que preciso disso?
      { name: 'Curtida', schema: CurtidaSchema },
    ]),
    CurtidaModule,
  ],
  providers: [PostagemService, CurtidaService],
  controllers: [PostagemController],
})
export class PostagemModule {}
