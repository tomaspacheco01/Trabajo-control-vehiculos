import { PrismaService } from '../prisma/prisma.service';
export declare class InspeccionesService {
    private prisma;
    constructor(prisma: PrismaService);
    crear(dto: {
        turnoId: number;
        inspectorId: number;
        observacion?: string;
        items: {
            chequeoItemId: number;
            puntaje: number;
        }[];
    }): Promise<{
        id: number;
        totalPuntos: number;
        resultado: string;
        observacion: string | null;
        turnoId: number;
        inspectorId: number;
    }>;
    obtener(id: number): Promise<({
        turno: {
            id: number;
            fechaHora: Date;
            confirmado: boolean;
            estado: string;
            vehiculoId: number;
        };
        items: {
            id: number;
            puntaje: number;
            inspeccionId: number;
            chequeoItemId: number;
        }[];
    } & {
        id: number;
        totalPuntos: number;
        resultado: string;
        observacion: string | null;
        turnoId: number;
        inspectorId: number;
    }) | null>;
}
