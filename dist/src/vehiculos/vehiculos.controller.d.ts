import { VehiculosService } from './vehiculos.service';
export declare class VehiculosController {
    private vehiculosService;
    constructor(vehiculosService: VehiculosService);
    crear(body: any): Promise<{
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
