const fetch = require("node-fetch");

module.exports = async () => {
  let books = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=static%20sites&maxResults=40&orderBy=relevance"
  ).then(response => response.json());

  return books;
};
