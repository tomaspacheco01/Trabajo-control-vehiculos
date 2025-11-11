import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { CrearTurnoDto } from './dto/crear-turno.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('turnos')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class TurnosController {
  constructor(private turnosService: TurnosService) {}

  @Post()
  @Roles('DUENIO')
  crear(@Body() dto: CrearTurnoDto) {
    return this.turnosService.crearTurno(dto.matricula, dto.fechaHora);
  }

  @Get()
  @Roles('ADMIN', 'INSPECTOR', 'DUENIO')
  listar() {
    return this.turnosService.listar();
  }
}
