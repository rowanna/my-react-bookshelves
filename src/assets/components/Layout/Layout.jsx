const Layout = ({ children }) => {
  return (
    <section style={{ width: 440 }}>
      <div style={{ backgroundColor: "#888" }}>Header</div>
      {children}
      <div style={{ backgroundColor: "#888" }}>Footer 고객센터</div>
    </section>
  );
};

export default Layout;
