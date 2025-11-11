import { Controller, Get } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';

@Controller('catalogo')
export class CatalogoController {
  constructor(private catalogoService: CatalogoService) {}

  // GET /catalogo/seed
  @Get('seed')
  seed() {
    return this.catalogoService.seed();
  }

  // GET /catalogo
  @Get()
  listar() {
    return this.catalogoService.listar();
  }
}
