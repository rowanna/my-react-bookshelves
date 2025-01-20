import { createContext, useState } from "react";

export const readingBookContext = createContext({
  readingBook: "",
  setReadingBook: (state) => {},
});

export default function ReadingBookContextProvider({ children }) {
  const [readingBook, setReadingBook] = useState("");
  return (
    <>
      <readingBookContext.Provider value={{ readingBook, setReadingBook }}>
        {children}
      </readingBookContext.Provider>
    </>
  );
}
