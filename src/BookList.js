import React, { useContext, useState } from "react";
import LibrariumContext from "../src/LibrariumContext";

const BookList = () => {
  let { form } = useContext(LibrariumContext);
  const [search, setSearch] = useState("");

  return (
    <div style={{ width: "30%", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>Filter:</p>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      {form
        .filter((el) => el.title.toLowerCase().includes(search))
        .map((el, index) => {
          return el.title.length > 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: 0,
              }}
              key={index}
            >
              <span
                style={{ margin: "2px 0" }}
              >{`${el.title} by ${el.author}. $${el.price}`}</span>
            </div>
          ) : null;
        })}
    </div>
  );
};

export default BookList;
