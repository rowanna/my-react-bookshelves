import Container from "../components/Container";
import Layout from "../components/Laout";
import MyBookShelvesList from "../components/MyBookShelvesList";
import CreatedPerson from "../components/CreatedPerson";

const Home = () => {
  return (
    <>
      <Layout>
        <Container title="나만의 책장">
          <MyBookShelvesList></MyBookShelvesList>
        </Container>
        <Container title="만든이">
          <CreatedPerson></CreatedPerson>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
