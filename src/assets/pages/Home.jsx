import Container from "../components/Layout/Container";
import Layout from "../components/Layout/Layout";
import MyBookShelvesList from "../components/MyBookShelvesList";
import CreatedPerson from "../components/CreatedPerson";
import ReadingBookContextProvider from "../../contexts/readingBookContexts";
import BookListContextsProvider from "../../contexts/bookListContexts";

const Home = () => {
  return (
    <>
      <Layout>
        <Container title="나만의 책장">
          <ReadingBookContextProvider>
            <BookListContextsProvider>
              <MyBookShelvesList />
            </BookListContextsProvider>
          </ReadingBookContextProvider>
        </Container>
        <Container title="만든이">
          <CreatedPerson></CreatedPerson>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
