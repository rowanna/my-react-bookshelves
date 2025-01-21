import { useContext, useEffect } from "react";
import books from "../../mock/book";
import { readingBookContext } from "../../contexts/readingBookContexts";
import { bookListContexts } from "../../contexts/bookListContexts";
import ReadingBookDisplay from "../components/ReadingBookDisplay";
import SearchBookInput from "../components/SearchBookInput";
import BookListDisplay from "../components/BookListDisplay";

function MyBookShelvesList() {
  const { readingBook, setReadingBook } = useContext(readingBookContext);
  const { setBookList } = useContext(bookListContexts);
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
      <BookListDisplay onClick={handleClick} />
    </>
  );
}

export default MyBookShelvesList;
