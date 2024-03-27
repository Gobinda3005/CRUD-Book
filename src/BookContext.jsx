import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handlePost = (postData) => {
    const existingBook = books.find((b) => b.id === postData.id);
    if (existingBook) {
      axios
        .put(`http://localhost:3000/books/${postData.id}`, postData)
        .then(() => {
          const updatedBooks = books.map((b) =>
            b.id === postData.id ? postData : b
          );
          setBooks(updatedBooks);
        })
        .catch((error) => console.error("Error updating book:", error));
    } else {
      axios
        .post("http://localhost:3000/books", postData)
        .then((response) => setBooks([...books, response.data]))
        .catch((error) => console.error("Error adding book:", error));
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => setBooks(books.filter((b) => b.id !== id)))
      .catch((error) => console.error("Error deleting book:", error));
  };

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  return (
    <BookContext.Provider
      value={{
        books,
        formOpen,
        handlePost,
        handleDelete,
        openForm,
        closeForm,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
