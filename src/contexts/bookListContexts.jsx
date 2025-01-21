import { createContext, useState } from "react";

export const bookListContexts = createContext({
  bookList: [],
  setBookList: (state) => {},
});

export default function BookListContextsProvider({ children }) {
  const [bookList, setBookList] = useState([]);
  return (
    <>
      <bookListContexts.Provider value={{ bookList, setBookList }}>
        {children}
      </bookListContexts.Provider>
    </>
  );
}
