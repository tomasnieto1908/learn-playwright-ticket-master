const express = require('express');
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta para obtener eventos
app.get('/events', (req, res) => {
  db.all('SELECT * FROM events', [], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(rows);
  });
});

// Ruta para comprar tickets
app.post('/buy', (req, res) => {
  const { eventId, quantity } = req.body;

  db.get('SELECT available_tickets FROM events WHERE id = ?', [eventId], (err, event) => {
    if (err) return res.status(500).send(err.message);
    if (!event) return res.status(404).send('Evento no encontrado.');

    if (event.available_tickets < quantity) {
      return res.status(400).send('No hay suficientes entradas disponibles.');
    }

    db.run('UPDATE events SET available_tickets = available_tickets - ? WHERE id = ?', [quantity, eventId], function(err) {
      if (err) return res.status(500).send(err.message);

      const now = new Date().toISOString();
      const stmt = db.prepare('INSERT INTO tickets (event_id, purchase_date) VALUES (?, ?)');
      for (let i = 0; i < quantity; i++) {
        stmt.run(eventId, now);
      }
      stmt.finalize();

      res.send('Compra realizada con éxito.');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
