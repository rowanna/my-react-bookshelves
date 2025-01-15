import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import CustomerPage from "./assets/pages/CustomerPage";
import DetailPage from "./assets/pages/DetailPage";
import "./App.css";
// import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 메인 페이지 */}
        <Route path="/customer" element={<CustomerPage />} />{" "}
        <Route path="/detail" element={<DetailPage />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
