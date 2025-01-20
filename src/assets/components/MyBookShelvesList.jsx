import books from "../../mock/book";

function MyBookShelvesList() {
  return (
    <>
      <div>현재 읽고있는 책 : </div>
      <input />
      <ul>
        {books.map(({ title, author, id }, idx) => (
          <li key={id}>
            {title} - {author}
            <button style={{ padding: "0.2rem 0.4rem", marginLeft: 4 }}>
              읽기
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MyBookShelvesList;
