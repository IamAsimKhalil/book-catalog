import React from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";

const BookCatalog = () => {
  return (
    <div style={{ border: "2px solid black", width: "50%", margin: "auto" }}>
      <h3 style={{ textAlign: "center" }}>Librarium Catalog</h3>
      <BookForm />
      <hr />
      <p style={{ textAlign: "center", marginBottom: 0 }}>Book Catalog</p>
      <BookList />
    </div>
  );
};

export default BookCatalog;
