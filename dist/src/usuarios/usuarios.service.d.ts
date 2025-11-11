import { PrismaService } from '../prisma/prisma.service';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    encontrarPorEmail(email: string): Promise<{
        nombre: string;
        id: number;
        email: string;
        password: string;
        rol: import("@prisma/client").$Enums.Rol;
    } | null>;
    crearUsuario(data: {
        nombre: string;
        email: string;
        password: string;
        rol: 'DUENIO' | 'INSPECTOR' | 'ADMIN';
    }): Promise<{
        nombre: string;
        id: number;
        email: string;
        password: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
    listar(): Promise<{
        nombre: string;
        id: number;
        email: string;
        password: string;
        rol: import("@prisma/client").$Enums.Rol;
    }[]>;
}
