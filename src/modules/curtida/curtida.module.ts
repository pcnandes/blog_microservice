import { Module } from '@nestjs/common';
import { CurtidaService } from './curtida.service';
import { CurtidaController } from './curtida.controller';

@Module({
  providers: [CurtidaService],
  controllers: [CurtidaController]
})
export class CurtidaModule {}
