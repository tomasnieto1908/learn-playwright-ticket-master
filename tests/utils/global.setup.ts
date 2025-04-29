import { prisma } from '../../lib/prisma';

async function globalSetup() {
  console.log('Ejecutando globalSetup: Inicializando entorno de pruebas...');

  await prisma.entradasVendidas.deleteMany();
  await prisma.recitales.deleteMany();

  await prisma.recitales.createMany({
    data: [
      {
        ubicacion: 'Estadio Obras Sanitarias, CABA',
        descripcion: 'Kreator + Sepultura - Latin America Attack 2025',
        fechaYHora: new Date('2025-06-14T21:00:00Z'),
        precioDeEntrada: 11000,
        cantidadDisponible: 800,
        genero: 'Thrash Metal'
      },
      {
        ubicacion: 'Teatro Flores, CABA',
        descripcion: 'Brujeria - Gira "Matando Güeros 30 años"',
        fechaYHora: new Date('2025-07-20T22:00:00Z'),
        precioDeEntrada: 7000,
        cantidadDisponible: 600,
        genero: 'Deathgrind'
      },
      {
        ubicacion: 'Uniclub, Abasto',
        descripcion: 'Nervosa + Crypta - Female Forces Tour',
        fechaYHora: new Date('2025-08-10T21:00:00Z'),
        precioDeEntrada: 6500,
        cantidadDisponible: 400,
        genero: 'Death/Thrash'
      },
      {
        ubicacion: 'Teatro Vorterix, Colegiales',
        descripcion: 'Death Angel + Warbringer - The Bay Strikes Back',
        fechaYHora: new Date('2025-09-05T21:30:00Z'),
        precioDeEntrada: 9500,
        cantidadDisponible: 700,
        genero: 'Thrash Metal'
      },
      {
        ubicacion: 'Estadio Luna Park, CABA',
        descripcion: 'Cannibal Corpse - Gira Sudamericana',
        fechaYHora: new Date('2025-10-03T20:30:00Z'),
        precioDeEntrada: 12000,
        cantidadDisponible: 1200,
        genero: 'Death Metal'
      },
      {
        ubicacion: 'The Roxy Live, Palermo',
        descripcion: 'Pestilence - "Testimony of the Ancients" completo en vivo',
        fechaYHora: new Date('2025-08-18T21:00:00Z'),
        precioDeEntrada: 8000,
        cantidadDisponible: 350,
        genero: 'Technical Death Metal'
      },
      {
        ubicacion: 'Teatro de Flores, CABA',
        descripcion: 'Avernal + Prion - Noche extrema nacional',
        fechaYHora: new Date('2025-09-28T22:00:00Z'),
        precioDeEntrada: 5000,
        cantidadDisponible: 500,
        genero: 'Death Metal Argentino'
      },
      {
        ubicacion: 'Auditorio Sur, Temperley',
        descripcion: 'Serpentor - Show 25 años',
        fechaYHora: new Date('2025-10-19T21:00:00Z'),
        precioDeEntrada: 4500,
        cantidadDisponible: 600,
        genero: 'Thrash Metal Argentino'
      },
      {
        ubicacion: 'Club Tucumán, Quilmes',
        descripcion: 'Mastifal - Regreso a los escenarios',
        fechaYHora: new Date('2025-11-08T22:00:00Z'),
        precioDeEntrada: 5500,
        cantidadDisponible: 400,
        genero: 'Death Metal Argentino'
      },
      {
        ubicacion: 'Centro Cultural Konex, CABA',
        descripcion: 'Plan 4 - Ritual del Fuego Tour',
        fechaYHora: new Date('2025-12-12T20:00:00Z'),
        precioDeEntrada: 5000,
        cantidadDisponible: 700,
        genero: 'Groove / Thrash'
      }
    ]
  });

  console.log('🔥 Recitales de thrash y death metal insertados correctamente.');
}

export default globalSetup;
