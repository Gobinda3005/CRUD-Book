import React, { useState } from "react";
import { useContext } from "react";
import BookContext from "./BookContext"; // Assuming you have a BookContext file
import Form from "./Form";

const Books = () => {
  const { books, formOpen, handleDelete, openForm, closeForm, handlePost } =
    useContext(BookContext);
  const [selectedBook, setSelectedBook] = useState(null);

  const editBook = (book) => {
    setSelectedBook(book);
    openForm();
  };

  return (
    <>
      <button
        className="p-5 bg-neutral-50 text-black hover:bg-blue-500 hover:text-white"
        onClick={() => {
          setSelectedBook(null);
          openForm();
        }}
      >
        Add new
      </button>
      <div className="grid grid-cols-3 place-items-center">
        {books.map((b) => (
          <div
            className="Book p-10 bg-white text-black rounded rounded-3 flex flex-col"
            key={b.id}
          >
            <img src={b.Poster} alt={b.Title} height="100" width="100" />
            <h1>{b.Author}</h1>
            <h2>{b.Title}</h2>
            {/* <h1>{b.Author}</h1> */}
            <p>Year: {b.Year}</p>
            <button onClick={() => editBook(b)}>✏️</button>
            <button onClick={() => handleDelete(b.id)}>❎</button>
          </div>
        ))}
      </div>
      <Form
        isOpen={formOpen}
        onClose={closeForm}
        handlePost={handlePost}
        book={selectedBook}
      />
    </>
  );
};

export default Books;
