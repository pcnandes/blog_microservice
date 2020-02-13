import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { PostagemModule } from './modules/postagem/postagem.module';
import { CurtidaModule } from './modules/curtida/curtida.module';
import { ComentarioModule } from './modules/comentario/comentario.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blog'),
    UsuarioModule,
    PostagemModule,
    CurtidaModule,
    ComentarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
