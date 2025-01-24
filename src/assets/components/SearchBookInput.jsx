import { useCallback, useContext, useRef } from "react";
import { bookListContexts } from "../../contexts/bookListContexts";
import books from "../../mock/book";
function SearchBookInput() {
  const inputRef = useRef("");
  const { setBookList } = useContext(bookListContexts);

  const handleKeyupEvent = useCallback((e) => {
    const searchWord = inputRef.current.value;

    if (e.key !== "Enter" || !searchWord.trim()) return;

    const searchedBookList = books.filter(({ title }) =>
      title.includes(searchWord)
    );
    setBookList(searchedBookList);
  });
  return <input onKeyUp={handleKeyupEvent} ref={inputRef} />;
}

export default SearchBookInput;
