import React, { useState } from "react";

const BookShelf = () => {
  const [books, setBooks] = useState([
    "To Kill a Mockingbird",
    "Pride and Prejudice",
    "1984",
    "The Great Gatsby",
    "The Catcher in the Rye",
  ]);

  const [newBook, setNewBook] = useState("");

  const handleInputChange = (event) => {
    setNewBook(event.target.value);
  };

  const addBook = () => {
    if (newBook.trim() !== "") {
      setBooks([...books, newBook.trim()]);
      setNewBook("");
    }
  };

  return (
    <div className="container">
      <h1>Best Books Shelf</h1>
      <div className="form-container">
        <input
          type="text"
          value={newBook}
          onChange={handleInputChange}
          placeholder="Enter a book title"
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ul id="bookList">
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookShelf;
