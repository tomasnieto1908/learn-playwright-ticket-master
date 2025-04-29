import { prisma } from '../../lib/prisma';

async function globalTeardown() {
  console.log('Ejecutando globalTeardown: Limpiando entorno de pruebas...');

  // Limpia los datos de prueba para evitar residuos.
  await prisma.entradasVendidas.deleteMany();
  await prisma.recitales.deleteMany();

  console.log('🎸 Datos de prueba eliminados correctamente.');
}

export default globalTeardown;
