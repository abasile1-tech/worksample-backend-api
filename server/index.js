const express = require('express');
const authors = require('./routes/authors');
const authorsBooks = require('./routes/authorsBooks');
const books = require('./routes/books');
const booksGenres = require('./routes/booksGenres');
const genres = require('./routes/genres');

const app = express();

app.use(express.json());
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	next();
})

app.use('/api/authors', authors);
app.use('/api/authorsBooks', authorsBooks);
app.use('/api/books', books);
app.use('/api/booksGenres', booksGenres);
app.use('/api/genres', genres);

app.listen(process.env.PORT || '5000', () => {
	console.log(`Server is running on port: ${process.env.PORT || '5000'}`);
});

