'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('DevOpsHerokuDocker - Hello Philip. Was passiert bei Änderungen? :-)))');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
