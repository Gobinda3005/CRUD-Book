import React, { useState, useEffect } from "react";

const Form = ({ isOpen, onClose, handlePost, book }) => {
  const [formData, setFormData] = useState({
    Author: "",
    id: "",
    Title: "",
    Poster: "",
    Year: "",
  });

  useEffect(() => {
    if (book) {
      setFormData({
        Author: book.Author,
        id: book.id,
        Title: book.Title,
        Poster: book.Poster,
        Year: book.Year,
      });
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePost(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-1/3 left-1/3 w-2/4 p-3 z-50 border border-black bg-white">
      <button className="float-end" onClick={onClose}>
        ❌
      </button>
      <h3 className="text-black">Enter book Details</h3>
      <form className="relative form p-2 w-full" onSubmit={handleSubmit}>
      <input
          type="text"
          name="Author"
          value={formData.Author}
          onChange={handleChange}
          className="form-control-plaintext h-10 w-full rounded-md focus:border-green-500 my-5"
          placeholder="Enter the book Author"
          required
        />
        <input
          type="number"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Title"
          value={formData.Title}
          onChange={handleChange}
          className="form-control-plaintext h-10 w-full rounded-md focus:border-green-500 my-5"
          placeholder="Enter the book title"
          required
        />
        <br />
        <input
          type="url"
          name="Poster"
          value={formData.Poster}
          onChange={handleChange}
          className="form-control-plaintext w-full h-10 my-5"
          placeholder="Enter the image URL"
          required
        />
        <br />
        <input
          type="number"
          name="Year"
          value={formData.Year}
          onChange={handleChange}
          className="form-control-plaintext h-10 w-full my-5"
          placeholder="Enter the published year"
          required
        />
        <br />
        <button className="p-5 bg-black center rounded-lg text-white hover:bg-white hover:text-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
