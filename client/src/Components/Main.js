import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form/Form";
import BookCard from "./BookCard/BookCard"


export default function Main() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  // READ
  async function getBooks() {
    let API = "http://localhost:8092/books";
    const result = await axios.get(API);
    console.log(result.data);
    setBooks(result.data);
  }

  // CREATE
  const handleAddBook = async (newBookFormData) => {
    const res = await axios.post(
      "http://localhost:8092/books",
      newBookFormData
    );
    setBooks([...books, res.data]);
  };

  const handleDelete = async (id) => {
    console.log("clicked");
    const res = await axios.delete(`http://localhost:8092/books/${id}`);
    console.log(res);
    getBooks();
  };

  // UPDATE

  const handleUpdateBook = async (book) => {
    await axios.put(`http://localhost:8092/book/${book._id}`, book);
    getBooks();
  };

  // talk about HTTP Request structure ->

  return (
    <div>
      <Form onSubmitFunc={handleAddBook} />
      <h3>This is my Main!</h3>
      <BookCard
        books={books}
        handleDelete={handleDelete}
        handleUpdateBook={handleUpdateBook}
      />
    </div>
  );
}
