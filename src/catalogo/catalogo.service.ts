import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CatalogoService {
  constructor(private prisma: PrismaService) {}

  // carga los 8 si no existen
  async seed() {
    const count = await this.prisma.chequeoItem.count();
    if (count === 0) {
      const items = [
        'Frenos',
        'Luces',
        'Neumáticos',
        'Suspensión',
        'Dirección',
        'Cinturones',
        'Emisiones',
        'Estructura',
      ];
      for (let i = 0; i < items.length; i++) {
        await this.prisma.chequeoItem.create({
          data: { nombre: items[i], orden: i + 1 },
        });
      }
    }
    return this.listar();
  }

  async listar() {
    return this.prisma.chequeoItem.findMany({
      orderBy: { orden: 'asc' },
    });
  }
}
