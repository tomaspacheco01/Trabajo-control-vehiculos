import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VehiculosService {
  constructor(private prisma: PrismaService) {}

  async crear(data: {
    matricula: string;
    marca?: string;
    modelo?: string;
    anio?: number;
    duenioId: number;
  }) {
    // ¿existe el dueño?
    const duenio = await this.prisma.usuario.findUnique({
      where: { id: data.duenioId },
    });
    if (!duenio) {
      throw new BadRequestException('El dueño no existe');
    }

    return this.prisma.vehiculo.create({
      data: {
        matricula: data.matricula,
        marca: data.marca,
        modelo: data.modelo,
        anio: data.anio,
        duenioId: data.duenioId,
      },
    });
  }

  async listar() {
    return this.prisma.vehiculo.findMany({
      include: { duenio: true },
    });
  }
}
