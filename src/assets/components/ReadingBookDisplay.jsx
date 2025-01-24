import { useContext, useEffect } from "react";
import { readingBookContext } from "../../contexts/readingBookContexts";
function ReadingBookDisplay() {
  const { readingBook, setReadingBook } = useContext(readingBookContext);

  useEffect(() => {
    localStorage.getItem("readingBook") &&
      setReadingBook(localStorage.getItem("readingBook"));
  }, []);

  return <div>현재 읽고있는 책 : {readingBook}</div>;
}

export default ReadingBookDisplay;
