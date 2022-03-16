const express = require('express');
const authors = require('./routes/authors');
const authorsBooks = require('./routes/authorsBooks');
const books = require('./routes/books');

const app = express();

app.use(express.json());

app.use('/api/authors', authors);
app.use('/api/authorsBooks', authorsBooks);
app.use('/api/books', books);

app.listen(process.env.PORT || '3000', () => {
	console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
});

