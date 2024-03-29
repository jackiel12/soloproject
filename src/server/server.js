const express = require('express');
const path = require('path');

const app = express();
const db = require('./database/postgresql');

// same as bodyParser, without bloating file/dling npm:
app.use(express.json());
// serve static files
app.use('/', express.static(path.join(__dirname, '..', '..', 'dist')));


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
});

// proxy reqs;

app.post('/api/createuser', (req, res) => {
  console.log('creating user', req.body);
  const { username, password } = req.body.credentials;
  db.query('INSERT INTO usertable (username, password) VALUES ($1, $2)', [username, password])
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  res.send('queried up');
});

app.post('/api/loggedin', (req, res) => {
  const { username, password } = req.body.credentials;
  db.query('SELECT username, password from usertable')
    .then((data) => {
      let flag;
      const dataArr = [];
      data.rows.forEach((credential) => {
        if (username === credential.username && password === credential.password) {
          flag = true;
          dataArr.push(credential);
        }
      });
      if (flag) {
        console.log('redirecting to home');
        return res.json({ loggedIn: true, username });
      }
      return res.json({ loggedIn: false, username: null });
      // res.send('queried up')
    })
    .catch((err) => console.log(err));
});

app.post('/api/database', (req, res) => {
  console.log('posting entry-');
  const {
    // eslint-disable-next-line comma-dangle
    entry, date, username, color
  } = req.body;
  db.query('INSERT INTO entrytable (entry, mood, created, username) VALUES ($1, $2, $3, $4) RETURNING entry, created', [entry, color, date, username])
    .then((data) => {
    //   console.log('data after posting here:', data.rows[0]);
      res.json(data.rows[0]);
    })
    .catch((err) => console.log('theres an error', err));
});

app.post('/api/weekly', (req, res) => {
  console.log('getting weekly-');
  const { username } = req.body;
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newdate = `'${year}-0${month}-${day}'`;

  db.query('SELECT entry, mood FROM entrytable WHERE created > CURRENT_DATE - 7 ')
    .then((data) => {
    //   console.log('found data', data.rows);
      res.json(data.rows);
    })
    .catch((err) => console.log('theres an error', err));
});

app.delete('/api/delete', (req, res) => {
  const { info } = req.body;
  console.log('deleteing...', info[0]);
  //   console.log('DELETE FROM entrytable WHERE entry= $1');
  db.query('DELETE FROM entrytable WHERE entry = $1', [info[0]])
    .then((data) => {
      console.log('data to delete:', data.rows);
      res.json(data.rows);
    })
    .catch((err) => console.log('err'));
});

// app.all('*', (req, res) => {
//     console.log('does it come')
//     res.status(200).sendFile(path.join(__dirname, '..', '..','dist', 'index.html'));

// })

app.listen(3000);
