import { useContext, useRef } from "react";
import { bookListContexts } from "../../contexts/bookListContexts";

function SearchBookInput() {
  const inputRef = useRef("");
  const { bookList, setBookList } = useContext(bookListContexts);

  function handleKeyupEvent(e) {
    const searchWord = inputRef.current.value;

    if (e.key !== "Enter" || !searchWord.trim()) return;

    const searchedBookList = bookList.filter(({ title }) =>
      title.includes(searchWord)
    );
    setBookList(searchedBookList);
  }
  return <input onKeyUp={handleKeyupEvent} ref={inputRef} />;
}

export default SearchBookInput;
