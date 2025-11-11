import { InspeccionesService } from './inspecciones.service';
export declare class InspeccionesController {
    private inspeccionesService;
    constructor(inspeccionesService: InspeccionesService);
    crear(dto: any): Promise<{
        id: number;
        totalPuntos: number;
        resultado: string;
        observacion: string | null;
        turnoId: number;
        inspectorId: number;
    }>;
    get(id: string): Promise<({
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
