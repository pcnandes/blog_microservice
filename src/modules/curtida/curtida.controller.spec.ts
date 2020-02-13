import { Test, TestingModule } from '@nestjs/testing';
import { CurtidaController } from './curtida.controller';

describe('Curtida Controller', () => {
  let controller: CurtidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurtidaController],
    }).compile();

    controller = module.get<CurtidaController>(CurtidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
