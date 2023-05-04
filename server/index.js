require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const addToLibrary = require('../database/addToLibrary.js')


app.use(express.static(path.join(__dirname, "./public/dist")));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'))
});

app.post('/books', (req, res) => {
  console.log('req body', req.body);
  // return addToLibrary(req.body)
  // .then(() => {
  //   res.status(200).send();
  // })
  // .catch((err) => {
  //   res.status(200).send('An error adding a book to the library: ', err);
});

app.post('/', (req, res) => {
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/bundle.js'))
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port 3000`)
})