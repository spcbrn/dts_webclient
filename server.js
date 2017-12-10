require('dotenv').config;

const express = require('express')
    , path = require('path');

const app = express()
    , port = process.env.PORT;

app.set('port', port);
app.use(express.static(`${__dirname,}/dist`));


app.get('*', (req, res) => {
  console.log(`serving ${req.url}`);
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => console.log(`serving port ${port}`));
