require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
//const addToLibrary = require('../database/addToLibrary.js');
const generator = require('./generatorSaltHash');
const pg = require('pg');
//const dbQuery = require('../database/dbQuery');
const axios = require('axios');


app.use(express.static(path.join(__dirname, "./public/dist")));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

app.post('/', (req, res) => {
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/bundle.js'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

app.get('/0f4328edd6df3f5cd6c6.png', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/0f4328edd6df3f5cd6c6.png'));
});

//HOMEPAGE ROUTES

//GET all trending
app.get('/trending', (req, res) => {
  console.log('request made to /trending endpoint');
  //make a request to the back end server
  axios.get('http://localhost:8080/trending')
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });

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


// Authorization
// For the homepage
app.get(`/getHash`, (req, res) => {
  axios.get(`${process.env.API_URL}/getHash`)
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(500).send(err));
});

app.get(`/email`, (req, res) => {
  axios.get(`${process.env.API_URL}/email`, { params: req.query })
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(500).send(err));
});

app.patch(`/updateSaltHash`, (req, res) => {
  axios.patch(`${process.env.API_URL}/updateSaltHash`, req.body)
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(500).send(err));
});

app.post(`/newUser`, (req, res) => {
  axios.post(`${process.env.API_URL}/newUser`, req.body)
    .then((data) => res.status(201).send(data.data))
    .catch((err) => res.status(501).send(err));
});

app.get(`/username`, (req, res) => {
  axios.get(`${process.env.API_URL}/username`)
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(500).send(err));
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
});
