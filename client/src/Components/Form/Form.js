import React, { useState } from "react";

export default function Form({ onSubmitFunc, book }) {
  const [formData, setFormData] = useState(
    book ?? {
      title: "",
      author: "",
      ID: "",
    }
  );

  // Dealing with FORM DATA
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  // helper function
  // use this handle different functions using whatever was passed to the prop.

  const submit = (event) => {
    event.preventDefault();
    // whatever was passed as tthe prop
    onSubmitFunc(formData);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          placeholder="book title"
          onChange={handleChange}
          name="title"
          value={formData.title}
        ></input>

        <input
          placeholder="Author"
          onChange={handleChange}
          name="Author"
          value={formData.director}
        ></input>
        <input
          placeholder="ID"
          onChange={handleChange}
          name="ID"
          value={formData.ID}
        ></input>
        <button type="submit">{book ? "Update" : "Add book"}</button>
      </form>
    </div>
  );
}
