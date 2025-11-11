import { TurnosService } from './turnos.service';
import { CrearTurnoDto } from './dto/crear-turno.dto';
export declare class TurnosController {
    private turnosService;
    constructor(turnosService: TurnosService);
    crear(dto: CrearTurnoDto): Promise<{
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
