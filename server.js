'use strict';

const express = require('express');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World - Simple NodeJS');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
