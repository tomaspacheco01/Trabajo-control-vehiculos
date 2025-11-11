import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InspeccionesService {
  constructor(private prisma: PrismaService) {}

  async crear(dto: {
    turnoId: number;
    inspectorId: number;
    observacion?: string;
    items: { chequeoItemId: number; puntaje: number }[];
  }) {
    // deben venir los 8 ítems
    if (!dto.items || dto.items.length !== 8) {
      throw new BadRequestException('Deben enviarse exactamente 8 items de chequeo');
    }

    const total = dto.items.reduce((acc, item) => acc + item.puntaje, 0);
    const hayMenor5 = dto.items.some((i) => i.puntaje < 5);

    let resultado = 'NO_APTO';
    if (total >= 80 && !hayMenor5) {
      resultado = 'APTO';
    }

    // lo hacemos en transacción
    return this.prisma.$transaction(async (tx) => {
      const inspeccion = await tx.inspeccion.create({
        data: {
          turnoId: dto.turnoId,
          inspectorId: dto.inspectorId,
          totalPuntos: total,
          resultado,
          observacion: dto.observacion,
        },
      });

      // guardar cada ítem
      for (const item of dto.items) {
        await tx.itemResultado.create({
          data: {
            inspeccionId: inspeccion.id,
            chequeoItemId: item.chequeoItemId,
            puntaje: item.puntaje,
          },
        });
      }

      // marcar el turno como completado
      await tx.turno.update({
        where: { id: dto.turnoId },
        data: { estado: 'COMPLETADO' },
      });

      return inspeccion;
    });
  }

  async obtener(id: number) {
  return this.prisma.inspeccion.findUnique({
    where: { id },
    include: {
      items: true,
      turno: true,
      },
    });
  }
}
