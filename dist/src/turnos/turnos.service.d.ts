import { PrismaService } from '../prisma/prisma.service';
export declare class TurnosService {
    private prisma;
    constructor(prisma: PrismaService);
    crearTurno(matricula: string, fechaHora: string): Promise<{
        id: number;
        fechaHora: Date;
        confirmado: boolean;
        estado: string;
        vehiculoId: number;
    }>;
    listar(): Promise<({
        vehiculo: {
            id: number;
            matricula: string;
            marca: string | null;
            modelo: string | null;
            anio: number | null;
            duenioId: number;
        };
    } & {
        id: number;
        fechaHora: Date;
        confirmado: boolean;
        estado: string;
        vehiculoId: number;
    })[]>;
}
