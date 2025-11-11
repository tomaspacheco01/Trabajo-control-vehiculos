import { PrismaService } from '../prisma/prisma.service';
export declare class CatalogoService {
    private prisma;
    constructor(prisma: PrismaService);
    seed(): Promise<{
        nombre: string;
        descripcion: string | null;
        orden: number;
        id: number;
    }[]>;
    listar(): Promise<{
        nombre: string;
        descripcion: string | null;
        orden: number;
        id: number;
    }[]>;
}
