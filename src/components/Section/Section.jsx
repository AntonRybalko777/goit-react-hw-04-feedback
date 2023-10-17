export const Section = ({ title, children }) => {
  return (
    <div style={{ margin: 20 }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
