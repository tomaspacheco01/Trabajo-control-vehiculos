import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { TurnosModule } from './turnos/turnos.module';
import { InspeccionesModule } from './inspecciones/inspecciones.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';

@Module({
  imports: [
    PrismaModule,
    CatalogoModule,
    TurnosModule,
    InspeccionesModule,
    UsuariosModule,
    AuthModule,
    VehiculosModule,
  ],
})
export class AppModule {}
