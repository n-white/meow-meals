const express = require('express');
const cors = require('cors');

const PORT = process.env.EXPRESS_PORT || 3000;
const app = express();

// TODO: find safer alternative than using cors library
app.use(cors());

app.get('/healthcheck', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;