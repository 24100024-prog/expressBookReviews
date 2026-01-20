const axios = require('axios');

const BASE_URL = "http://localhost:3000";

// Get all books
async function getAllBooks() {
  try {
    const res = await axios.get(`${BASE_URL}/books`);
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}

// Get by ISBN
async function getBookByISBN(isbn) {
  try {
    const res = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}

// By author
async function getBooksByAuthor(author) {
  try {
    const res = await axios.get(`${BASE_URL}/books/author/${author}`);
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}

// By title
async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`${BASE_URL}/books/title/${title}`);
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
