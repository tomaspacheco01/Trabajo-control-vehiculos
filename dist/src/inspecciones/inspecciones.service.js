"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InspeccionesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InspeccionesService = class InspeccionesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crear(dto) {
        if (!dto.items || dto.items.length !== 8) {
            throw new common_1.BadRequestException('Deben enviarse exactamente 8 items de chequeo');
        }
        const total = dto.items.reduce((acc, item) => acc + item.puntaje, 0);
        const hayMenor5 = dto.items.some((i) => i.puntaje < 5);
        let resultado = 'NO_APTO';
        if (total >= 80 && !hayMenor5) {
            resultado = 'APTO';
        }
        return this.prisma.$transaction(async (tx) => {
            const inspeccion = await tx.inspeccion.create({
                data: {
                    turnoId: dto.turnoId,
                    inspectorId: dto.inspectorId,
                    totalPuntos: total,
                    resultado,
                    observacion: dto.observacion,
                },
            });
            for (const item of dto.items) {
                await tx.itemResultado.create({
                    data: {
                        inspeccionId: inspeccion.id,
                        chequeoItemId: item.chequeoItemId,
                        puntaje: item.puntaje,
                    },
                });
            }
            await tx.turno.update({
                where: { id: dto.turnoId },
                data: { estado: 'COMPLETADO' },
            });
            return inspeccion;
        });
    }
    async obtener(id) {
        return this.prisma.inspeccion.findUnique({
            where: { id },
            include: {
                items: true,
                turno: true,
            },
        });
    }
};
exports.InspeccionesService = InspeccionesService;
exports.InspeccionesService = InspeccionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InspeccionesService);
//# sourceMappingURL=inspecciones.service.js.map