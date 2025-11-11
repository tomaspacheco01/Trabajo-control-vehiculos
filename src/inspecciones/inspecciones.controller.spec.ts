import { Test, TestingModule } from '@nestjs/testing';
import { InspeccionesController } from './inspecciones.controller';

describe('InspeccionesController', () => {
  let controller: InspeccionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InspeccionesController],
    }).compile();

    controller = module.get<InspeccionesController>(InspeccionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
