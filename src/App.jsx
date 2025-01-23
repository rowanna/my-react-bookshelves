import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import CustomerPage from "./assets/pages/CustomerPage";
import DetailPage from "./assets/pages/DetailPage";
import books from "./mock/book";
import "./App.css";
// import

const projectBasePath = "/my-react-bookshelves"; // 기본 경로를 변수로 정의

const App = () => {
  return (
    <Router basename={projectBasePath}>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 메인 페이지 */}
        <Route path="/customer" element={<CustomerPage />} />{" "}
        {books.map(({ id }) => (
          <Route key="id" path={`/detail/${id}`} element={<DetailPage />} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
