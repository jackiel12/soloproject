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

app.post('/post', (req, res) => {
    const {body} = req.body;
    // db.query('INSERT INTO entrytable (entry) VALUES (req.body.text)
})



app.listen(3000);