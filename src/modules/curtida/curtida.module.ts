import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CurtidaSchema } from './curtida.schema';
import { CurtidaService } from './curtida.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Curtida', schema: CurtidaSchema }]),
  ],
  providers: [CurtidaService],
  exports: [CurtidaService],
})
export class CurtidaModule {}
