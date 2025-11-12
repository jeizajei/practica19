const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hola Node.js con express!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);

});
