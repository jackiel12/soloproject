const express = require('express');
const path = require('path');
const app = express();
const db = require('../../server/database/postgresql');


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
})




app.listen(3000);