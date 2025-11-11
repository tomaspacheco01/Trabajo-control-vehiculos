import { CatalogoService } from './catalogo.service';
export declare class CatalogoController {
    private catalogoService;
    constructor(catalogoService: CatalogoService);
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
