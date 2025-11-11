import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('vehiculos')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class VehiculosController {
  constructor(private vehiculosService: VehiculosService) {}

  @Post()
  @Roles('DUENIO', 'ADMIN')
  crear(@Body() body: any) {
    return this.vehiculosService.crear(body);
  }

  @Get()
  @Roles('ADMIN', 'INSPECTOR', 'DUENIO')
  listar() {
    return this.vehiculosService.listar();
  }
}
