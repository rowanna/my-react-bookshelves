import books from "../../mock/book";
import { useLocation } from "react-router-dom";
import Layout from "../components/Laout";

const DetailPage = () => {
  const urlParameter = Number(useLocation().pathname.split("/")[2]);
  const data = books.filter(({ id }) => id === urlParameter)[0];

  return (
    <>
      <Layout>
        <div>
          <h2>{data.title}</h2>
          <p>- 저자 : {data.author}</p>
          <p>
            - 출판 : {data.publisher} | {data.year}
          </p>
          <p>- 가격 : {data.price}</p>
        </div>
      </Layout>
    </>
  );
};

export default DetailPage;
