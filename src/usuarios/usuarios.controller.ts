import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Post()
  crear(@Body() body: any) {
    return this.usuariosService.crearUsuario(body);
  }

  @Get()
  listar() {
    return this.usuariosService.listar();
  }
}
