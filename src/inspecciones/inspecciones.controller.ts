import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { InspeccionesService } from './inspecciones.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('inspecciones')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class InspeccionesController {
  constructor(private inspeccionesService: InspeccionesService) {}

  @Post()
  @Roles('INSPECTOR')
  crear(@Body() dto: any) {
    return this.inspeccionesService.crear(dto);
  }

  @Get(':id')
  @Roles('ADMIN', 'INSPECTOR', 'DUENIO')
  get(@Param('id') id: string) {
    return this.inspeccionesService.obtener(+id);
  }
}

