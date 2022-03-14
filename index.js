const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const authors = require('./api/authors.js');
//const books = require('./api/books');

app.use('/api/authors', authors);
//app.use('/api/books', books);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));