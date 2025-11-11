-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('DUENIO', 'INSPECTOR', 'ADMIN');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "rol" "Rol" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehiculo" (
    "id" SERIAL NOT NULL,
    "matricula" TEXT NOT NULL,
    "marca" TEXT,
    "modelo" TEXT,
    "anio" INTEGER,
    "duenioId" INTEGER NOT NULL,

    CONSTRAINT "Vehiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turno" (
    "id" SERIAL NOT NULL,
    "vehiculoId" INTEGER NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL,
    "confirmado" BOOLEAN NOT NULL DEFAULT false,
    "estado" TEXT NOT NULL DEFAULT 'PENDIENTE',

    CONSTRAINT "Turno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inspeccion" (
    "id" SERIAL NOT NULL,
    "turnoId" INTEGER NOT NULL,
    "inspectorId" INTEGER NOT NULL,
    "totalPuntos" INTEGER NOT NULL,
    "resultado" TEXT NOT NULL,
    "observacion" TEXT,

    CONSTRAINT "Inspeccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChequeoItem" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "orden" INTEGER NOT NULL,

    CONSTRAINT "ChequeoItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemResultado" (
    "id" SERIAL NOT NULL,
    "inspeccionId" INTEGER NOT NULL,
    "chequeoItemId" INTEGER NOT NULL,
    "puntaje" INTEGER NOT NULL,

    CONSTRAINT "ItemResultado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vehiculo_matricula_key" ON "Vehiculo"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Inspeccion_turnoId_key" ON "Inspeccion"("turnoId");

-- AddForeignKey
ALTER TABLE "Vehiculo" ADD CONSTRAINT "Vehiculo_duenioId_fkey" FOREIGN KEY ("duenioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "Vehiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspeccion" ADD CONSTRAINT "Inspeccion_turnoId_fkey" FOREIGN KEY ("turnoId") REFERENCES "Turno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspeccion" ADD CONSTRAINT "Inspeccion_inspectorId_fkey" FOREIGN KEY ("inspectorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemResultado" ADD CONSTRAINT "ItemResultado_inspeccionId_fkey" FOREIGN KEY ("inspeccionId") REFERENCES "Inspeccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemResultado" ADD CONSTRAINT "ItemResultado_chequeoItemId_fkey" FOREIGN KEY ("chequeoItemId") REFERENCES "ChequeoItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
