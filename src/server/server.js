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
  console.log('posting entry');
  const {
    text, date, username, color,
  } = req.body;
  console.log(req.body);
//   db.query('INSERT INTO entrytable (entry, mood, created, username), VALUES ($1, $2, $3, $4)', [text, color, date, username])
//     .then((data) => console.log('data here', data))
//     .catch((err) => console.log('theres an error', err));
//   res.send('queried up');
});

// app.all('*', (req, res) => {
//     console.log('does it come')
//     res.status(200).sendFile(path.join(__dirname, '..', '..','dist', 'index.html'));

// })

app.listen(3000);
