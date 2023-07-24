const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/kresna', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});