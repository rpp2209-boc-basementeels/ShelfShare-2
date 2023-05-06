require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const addToLibrary = require('../database/addToLibrary.js');
const generator = require('./generatorSaltHash');
const pg = require('pg');
const dbQuery = require('../database/dbQuery');


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
})

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

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});


// Authorization
app.get('/getHash', (req, res) => {
});

app.get('/email', (req, res) => {
  dbQuery.checkTable('users', req.query, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.patch('/updateSaltHash', (req, res) => {
  const salt = generator.generatorSalt(req.cookies.g_state);
  const hash = generator.generatorHash(req.cookies.g_state, salt);
  const whereObj = req.body;
  const setSaltObj = { salt: salt };
  const setHashObj = { hash: hash };
  dbQuery.updateTable('users', whereObj, setSaltObj, (err, data) => {
    if (err) {
      res.status(500).send('1');
    } else {
      dbQuery.getID('users', whereObj, (err, data) => {
        if (err) {
          res.status(500).send('2');
        } else {
          const result = {
            user_id: data[0].id
          };
          dbQuery.updateTable('sessions', result, setHashObj, (err, data) => {
            if (err) {
              res.status(500).send('3');
            } else {
              res.status(200).send('Salt and hash have been updated!')
            }
          })
        }
      })
    }
  })
});

app.post('/newUser', (req, res) => {
  const salt = generator.generatorSalt(req.cookies.g_state);
  const hash = generator.generatorHash(req.cookies.g_state, salt);
  const result = {
    ...req.body,
    salt: salt,
    // hash: hash,
  };
  dbQuery.addToTable('users', result, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      dbQuery.getID('users', { email: req.body.email }, (err, data) => {
        const result2 = {
          user_id: data[0].id,
          hash: hash,
        };
        dbQuery.addToTable('sessions', result2, (err, data) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(201).send('User information was added.');
          }
        })

      })
    }
  });
});

app.get('/username', (req, res) => {
  dbQuery.checkTable('users', req.query, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})
