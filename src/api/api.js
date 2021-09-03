import axios from 'axios';

const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Mv3IwYTVHxFjyvrUVnvE/books/`;

const getBooks = async () => {
  const response = await axios.get(url);
  const { data } = response;
  const books = [];
  Object.entries(data).forEach((book) => {
    books.push(
      {
        title: book[1][0].title,
        category: book[1][0].category,
        item_id: `${book[0]}`,
      },
    );
  });
  return books;
};

const createBook = async (newBook) => {
  const response = await axios.post(url, newBook);
  return response.data;
};

const removeBook = async (id) => {
  const removeURL = url + `${id}`;
  const response = await axios.delete(removeURL);
  return response.data;
};

export { getBooks, createBook, removeBook };
