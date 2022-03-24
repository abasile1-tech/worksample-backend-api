# Backend API Work Sample

This repository is my work sample
for my application as a backend developer at Odd Hill.

The work sample focuses on building an API with Node.js.

## The API

The API exposes data about books, the authors
of these books and the genres of the books.

### It is possible to get data from the API in the following ways

- List all books
- List all authors
- List all genres
- List all authors for a specific book
- List all books for a specific author
- List all genres for a specific book
- Get a single book by ID
- Get a single author by ID
- Get a single genre by ID

## Data source

In this repository you will find database dumps for the data required to build
the API. There are database dumps available for MySQL and SQLite, but I built the API for use with MySQL.

## Since I had the time

The following items were not required but had the time to
implement them. 

### Additional ways to get data

- Search for books by ISBN
- Search for books by title
- Search for authors by name
- Search for genres by name

## I had even more time

I built a basic administrative interface protected by authentication where
admins can manage the library of books.

The administrative interface was built with Node.js

I built the frontend with Vue.

I wrote my own css.

### As an administrator you are be able to do the following

- Create, edit and delete books.
- Create, edit and delete authors.
- Create, edit and delete genres.

### How to get the API up and running

- Clone the project to your local machine
- Run `npm install` inside of both the base directory and the client directory as well.
- Load the provided MySQL database dump to load into MySQL
- Run `npm run dev` inside of both the base directory and the client directory as well.
- Access the administrator login page in your browser at `localhost:3000`. Use `admin` for the username and `password` for the password.
