require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const addToLibrary = require('../database/addToLibrary.js');


app.use(express.static(path.join(__dirname, "./public/dist")));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
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
  res.sendFile(path.join(__dirname, '../public/dist/bundle.js'));
});

//HOMEPAGE ROUTES

//GET all trending
app.get('/trending', (req, res) => {

});

//GET all from selected genre
app.get('/genre', (req, res) => {

});

//GET all from selected pub date range
app.get('/published', (req, res) => {

});

//GET details for selected books
app.get('/detail', (req, res) => {

});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port 3000`);
});

