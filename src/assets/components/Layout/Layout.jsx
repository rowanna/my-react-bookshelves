import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <section style={{ width: 440 }}>
      <div style={{ backgroundColor: "#888" }}>Header</div>
      {children}
      <div style={{ backgroundColor: "#888" }}>
        Footer
        <Link to="/customer">고객센터</Link>
      </div>
    </section>
  );
};

export default Layout;
