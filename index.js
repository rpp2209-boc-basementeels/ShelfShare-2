require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');


app.use(express.static(path.join(__dirname, "./public/dist")));
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'))
});

app.post('/', (req, res) => {
  console.log(req)
  // console.log(res)
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})