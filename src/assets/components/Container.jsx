const Container = ({ title, children }) => {
  return (
    <>
      <div className="container">
        <p>{title}</p>
        {children}
      </div>
    </>
  );
};

export default Container;
