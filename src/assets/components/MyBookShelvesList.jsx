import { useContext, createContext, useState, useEffect } from "react";
import books from "../../mock/book";
import { readingBookContext } from "../../contexts/readingBookContexts";

function MyBookShelvesList() {
  const { readingBook, setReadingBook } = useContext(readingBookContext);

  const handleClick = (e) => {
    const parentElText = e.target.parentElement.innerText;
    const selectedBookTitle = parentElText.split("-")[0];

    setReadingBook(selectedBookTitle);
    localStorage.setItem("readingBook", selectedBookTitle);
  };

  useEffect(() => {
    localStorage.getItem("readingBook") &&
      setReadingBook(localStorage.getItem("readingBook"));
  }, []);

  return (
    <>
      <div>현재 읽고있는 책 : {readingBook}</div>
      <input />
      <ul>
        {books.map(({ title, author, id }, idx) => (
          <li key={id}>
            {title}-{author}
            <button
              onClick={handleClick}
              style={{ padding: "0.2rem 0.4rem", marginLeft: 4 }}
            >
              읽기
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MyBookShelvesList;
