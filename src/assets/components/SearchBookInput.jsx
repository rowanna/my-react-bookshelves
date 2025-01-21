import { useContext, useRef } from "react";
import { bookListContexts } from "../../contexts/bookListContexts";
import books from "../../mock/book";
function SearchBookInput() {
  const booksData = [...books];
  const inputRef = useRef("");
  const { setBookList } = useContext(bookListContexts);

  function handleKeyupEvent(e) {
    const searchWord = inputRef.current.value;

    if (e.key !== "Enter" || !searchWord.trim()) return;

    const searchedBookList = booksData.filter(({ title }) =>
      title.includes(searchWord)
    );
    setBookList(searchedBookList);
  }
  return <input onKeyUp={handleKeyupEvent} ref={inputRef} />;
}

export default SearchBookInput;
