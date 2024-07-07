const express = require('express');
const ngrok = require('ngrok');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, async () => {
  console.log(`App listening at http://localhost:${port}`);
  const url = await ngrok.connect({ addr: port, authtoken: process.env.NGROK_TOKEN });
  console.log(`ngrok tunnel opened at: ${url}`);
});
