const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// In-memory book array
let books = [];

// POST /books → Add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Optional: GET /books to check all books
app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
