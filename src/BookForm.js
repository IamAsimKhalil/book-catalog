import React, { useContext, useState } from "react";
import LibrariumContext from "./LibrariumContext";

const BookForm = () => {
  const bookList = useContext(LibrariumContext);
  const [form, setForm] = useState(bookList.form[0]);
  const handleSubmit = (e) => {
    if (form.title === "" || form.author === "" || form.price === 0) {
      alert("All Fields are required!");
    } else {
      bookList.getData(form);
      setForm({ title: "", author: "", price: "" });
    }
  };
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Author"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />{" "}
      <br />
      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />{" "}
      <br />
      <button
        type="submit"
        style={{ width: "6rem", margin: "auto" }}
        onClick={handleSubmit}
      >
        Add Book
      </button>
    </div>
  );
};

export default BookForm;
