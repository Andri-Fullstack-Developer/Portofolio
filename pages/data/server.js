// server.js atau api/[...nextapi].js
const express = require('express');
const next = require('next');
const { trackAccess } = require('./middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Terapkan middleware
  server.use(trackAccess);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('http://localhost:3000/Home');
  });
});
