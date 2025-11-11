import { InspeccionesService } from './inspecciones.service';
import { PrismaService } from '../prisma/prisma.service';

describe('InspeccionesService - Unit Test', () => {
  // mock de prisma que se parece más al real
  const prismaMock = {
    $transaction: async (cb: any) => {
      const tx = {
        inspeccion: {
          // simulamos que Prisma devuelve lo mismo que le pasás en data
          create: jest.fn(async ({ data }) => ({
            id: 1,
            ...data,
          })),
        },
        itemResultado: {
          create: jest.fn(),
        },
        turno: {
          update: jest.fn(),
        },
      };
      return cb(tx);
    },
  } as unknown as PrismaService;

  const service = new InspeccionesService(prismaMock);

  it('debería devolver APTO cuando total >= 80 y ningún ítem < 5', async () => {
    const dto = {
      turnoId: 1,
      inspectorId: 2,
      items: Array.from({ length: 8 }).map((_, i) => ({
        chequeoItemId: i + 1,
        puntaje: 10,
      })),
    };

    const result = await service.crear(dto as any);
    expect(result.resultado).toBe('APTO');
    expect(result.totalPuntos).toBe(80);
  });

  it('debería devolver NO_APTO cuando algún ítem < 5', async () => {
    const dto = {
      turnoId: 1,
      inspectorId: 2,
      items: [
        { chequeoItemId: 1, puntaje: 10 },
        { chequeoItemId: 2, puntaje: 10 },
        { chequeoItemId: 3, puntaje: 4 }, // este rompe la regla
        { chequeoItemId: 4, puntaje: 10 },
        { chequeoItemId: 5, puntaje: 10 },
        { chequeoItemId: 6, puntaje: 10 },
        { chequeoItemId: 7, puntaje: 10 },
        { chequeoItemId: 8, puntaje: 10 },
      ],
    };

    const result = await service.crear(dto as any);
    expect(result.resultado).toBe('NO_APTO');
    expect(result.totalPuntos).toBe(80 - 6); // 74
  });
});
