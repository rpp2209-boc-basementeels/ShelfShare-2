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
  axios.get(process.env.API_URL + '/trending')
    .then((result) => {
      res.status(200).send(result.data);
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
  let bookId = req.query.bookId;
  axios.get(process.env.API_URL + '/detail', {params: {bookId: bookId}})
    .then((result) => {
      console.log(result.data);
      res.status(200).send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// PROFILE ROUTES

// GET all reviews for a specific user
app.get('/reviews/:username', (req, res) => {
  var username = req.params.username;
  // direct request to backend repository
  axios.get(`${process.env.API_URL}/reviews/${username}`)
    .then((data) => {
      console.log('data here', data);
      res.status(200).send(data.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

// GET user's personal information
app.get('/personalInformation/:username', (req, res) => {
  var username = req.params.username;
  // direct request to backend repository
  axios.get(`${process.env.API_URL}/personalInformation/${username}`)
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

// POST to update user's personal information
app.post('/personalInformation/:username', (req, res) => {
  // direct request to backend repository

});

// GET user's public-facing information
app.get('/publicPersonalInformation/:username', (req, res) => {
  // direct request to backend repository

});

// GET all reviews for a specific book_id
app.get('/bookReviews/:book_id', (req, res) => {

});

app.get('/orders/:id', (req, res) => {
  var uniqueId = req.params.id;
  let url = `${process.env.API_URL}/orders/${uniqueId}`;
  console.log(url)

  axios.get(url)
  .then(list => res.status(200).send(list.data))
  .catch(err => res.sendStatus(404));
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
  const sendInfo = {
    ...req.body,
    cookies: req.cookies,
  }
  axios.patch(`${process.env.API_URL}/updateSaltHash`, sendInfo)
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
