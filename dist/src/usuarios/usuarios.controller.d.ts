import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private usuariosService;
    constructor(usuariosService: UsuariosService);
    crear(body: any): Promise<{
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
