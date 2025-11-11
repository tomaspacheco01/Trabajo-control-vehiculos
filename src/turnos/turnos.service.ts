import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TurnosService {
  constructor(private prisma: PrismaService) {}

  async crearTurno(matricula: string, fechaHora: string) {
    // buscar el vehículo por matrícula
    const vehiculo = await this.prisma.vehiculo.findUnique({
      where: { matricula },
    });

    if (!vehiculo) {
      throw new BadRequestException('El vehículo no existe');
    }

    return this.prisma.turno.create({
      data: {
        vehiculoId: vehiculo.id,
        fechaHora: new Date(fechaHora),
        estado: 'PENDIENTE',
      },
    });
  }

  async listar() {
    return this.prisma.turno.findMany({
      include: { vehiculo: true },
      orderBy: { fechaHora: 'asc' },
    });
  }
}
