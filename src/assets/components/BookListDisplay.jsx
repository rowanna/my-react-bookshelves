import { bookListContexts } from "../../contexts/bookListContexts";
import { readingBookContext } from "../../contexts/readingBookContexts";
import { useContext, memo, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import books from "../../mock/book";

const BookListDisplay = memo(function BookListDisplay() {
  const { setReadingBook } = useContext(readingBookContext);
  const { bookList } = useContext(bookListContexts);
  const { setBookList } = useContext(bookListContexts);

  useEffect(() => {
    setBookList(books);
  }, []);
  const handleClick = useCallback((e) => {
    e.preventDefault();
    const parentElText = e.target.parentElement.innerText;
    const selectedBookTitle = parentElText.split("-")[0];

    setReadingBook(selectedBookTitle);
    localStorage.setItem("readingBook", selectedBookTitle);
  });
  return (
    <>
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
});

export default BookListDisplay;
