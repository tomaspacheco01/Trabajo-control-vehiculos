import { PrismaService } from '../prisma/prisma.service';
export declare class VehiculosService {
    private prisma;
    constructor(prisma: PrismaService);
    crear(data: {
        matricula: string;
        marca?: string;
        modelo?: string;
        anio?: number;
        duenioId: number;
    }): Promise<{
        id: number;
        matricula: string;
        marca: string | null;
        modelo: string | null;
        anio: number | null;
        duenioId: number;
    }>;
    listar(): Promise<({
        duenio: {
            nombre: string;
            id: number;
            email: string;
            password: string;
            rol: import("@prisma/client").$Enums.Rol;
        };
    } & {
        id: number;
        matricula: string;
        marca: string | null;
        modelo: string | null;
        anio: number | null;
        duenioId: number;
    })[]>;
}
