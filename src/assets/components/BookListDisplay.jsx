import { bookListContexts } from "../../contexts/bookListContexts";
import { useContext } from "react";
import { Link } from "react-router-dom";

function BookListDisplay({ onClick }) {
  const { bookList } = useContext(bookListContexts);

  return (
    <>
      <ul>
        {bookList.map(({ title, author, id }) => (
          <li key={id}>
            <Link to={`/detail/${id}`}>
              {title}-{author}
              <button
                onClick={onClick}
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

export default BookListDisplay;
