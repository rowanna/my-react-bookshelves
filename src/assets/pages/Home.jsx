import Container from "../components/Container";
import Layout from "../components/Laout";
import MyBookShelvesList from "../components/MyBookShelvesList";
import CreatedPerson from "../components/CreatedPerson";
import ReadingBookContextProvider from "../../contexts/readingBookContexts";
const Home = () => {
  return (
    <>
      <Layout>
        <Container title="나만의 책장">
          <ReadingBookContextProvider>
            <MyBookShelvesList></MyBookShelvesList>
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
