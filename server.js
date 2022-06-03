'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Was passiert bei Änderungen? :-))) Wieder heroku push und release ausführen, schon sind die Änderungen verfügbar :-)');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
