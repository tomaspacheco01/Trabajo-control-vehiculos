"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const catalogo_module_1 = require("./catalogo/catalogo.module");
const turnos_module_1 = require("./turnos/turnos.module");
const inspecciones_module_1 = require("./inspecciones/inspecciones.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const auth_module_1 = require("./auth/auth.module");
const vehiculos_module_1 = require("./vehiculos/vehiculos.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            catalogo_module_1.CatalogoModule,
            turnos_module_1.TurnosModule,
            inspecciones_module_1.InspeccionesModule,
            usuarios_module_1.UsuariosModule,
            auth_module_1.AuthModule,
            vehiculos_module_1.VehiculosModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map