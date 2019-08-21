const express = require('express');
const path = require('path');
const app = express();
const db = require('./database/postgresql');

//same as bodyParser, without bloating file/dling npm:
app.use(express.json());
//serve static files
app.use('/', express.static(path.join(__dirname, '..', '..','dist')))


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', '..','dist', 'index.html'));
})

// app.get('/api/database', (req, res) => {
//     res.sendFile(path.join(__dirname, './database/postgres.js'))
// })



//proxy reqs;

app.post('/api/createuser', (req, res) => {
    console.log('posting', req.body);
    const {username, password} = req.body.credentials;
    db.query('INSERT INTO usertable (username, password) VALUES ($1, $2)', [username, password])
        .then (data => console.log(data))
        .catch(err => console.log(err))
    res.send('queried up')
})

//login post req;
// app.post ('/api/loggedin', (req, res) => {
//     console.log('logging in');
//     const {username} = req.body;
// })


app.post('/api/database', (req, res) => {
    console.log('posting');
    const {text} = req.body;
    db.query('INSERT INTO entrytable (entry) VALUES ($1)', [text])
        .then (data => console.log(data))
        .catch(err => console.log(err))
    res.send('queried up')
})



app.listen(3000);