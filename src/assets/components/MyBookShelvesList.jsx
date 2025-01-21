import { useContext, useEffect } from "react";
import books from "../../mock/book";
import { readingBookContext } from "../../contexts/readingBookContexts";
import { bookListContexts } from "../../contexts/bookListContexts";
import { Link } from "react-router-dom";
import ReadingBookDisplay from "../components/ReadingBookDisplay";
import SearchBookInput from "../components/SearchBookInput";

function MyBookShelvesList() {
  const { readingBook, setReadingBook } = useContext(readingBookContext);
  const { bookList, setBookList } = useContext(bookListContexts);
  const handleClick = (e) => {
    e.preventDefault();
    const parentElText = e.target.parentElement.innerText;
    const selectedBookTitle = parentElText.split("-")[0];

    setReadingBook(selectedBookTitle);
    localStorage.setItem("readingBook", selectedBookTitle);
  };

  useEffect(() => {
    localStorage.getItem("readingBook") &&
      setReadingBook(localStorage.getItem("readingBook"));

    setBookList(books);
  }, []);

  return (
    <>
      <ReadingBookDisplay readingBook={readingBook} />
      <SearchBookInput />

      <ul>
        {bookList.map(({ title, author, id }) => (
          <li key={id}>
            <Link to={`/detail/${id}`}>
              {title}-{author}
              <button
                onClick={handleClick}
                style={{ padding: "0.2rem 0.4rem", marginLeft: 4 }}
              >
                읽기
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MyBookShelvesList;
