import React, { useState } from "react";
import BookCatalog from "./BookCatalog";
import LibrariumContext from "./LibrariumContext";

const App = () => {
  const [books, setBooks] = useState([{ title: "", author: "", price: 0 }]);
  const getData = (data) => {
    setBooks((books) => (books = [...books, data]));
  };
  return (
    <div >

<LibrariumContext.Provider value={{ form: books, getData }}>
        <BookCatalog />
      </LibrariumContext.Provider>
    
    </div>
      
  );
};

export default App;
