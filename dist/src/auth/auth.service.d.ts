import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usuariosService;
    private jwtService;
    constructor(usuariosService: UsuariosService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<{
        nombre: string;
        id: number;
        email: string;
        rol: import("@prisma/client").$Enums.Rol;
    }>;
    login(email: string, pass: string): Promise<{
        access_token: string;
    }>;
}
