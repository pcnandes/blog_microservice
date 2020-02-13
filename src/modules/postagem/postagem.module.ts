import { Module } from '@nestjs/common';
import { PostagemService } from './postagem.service';
import { PostagemController } from './postagem.controller';

@Module({
  providers: [PostagemService],
  controllers: [PostagemController]
})
export class PostagemModule {}
