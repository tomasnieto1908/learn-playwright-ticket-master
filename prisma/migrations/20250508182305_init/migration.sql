-- CreateTable
CREATE TABLE "Recitales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ubicacion" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaYHora" DATETIME NOT NULL,
    "precioDeEntrada" REAL NOT NULL,
    "cantidadDisponible" INTEGER NOT NULL,
    "genero" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "EntradasVendidas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "recitalId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    CONSTRAINT "EntradasVendidas_recitalId_fkey" FOREIGN KEY ("recitalId") REFERENCES "Recitales" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
