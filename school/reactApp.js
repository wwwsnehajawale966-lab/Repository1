const App = () => {
  return React.createElement(
    "h2",
    {
      style: {
        textAlign: "center",
        color: "blue",
        marginTop: "20px",
      },
    },
    "Welcome to SNBP's International School 🚀 (Powered by React)",
  );
};

const root = ReactDOM.createRoot(document.getElementById("react-root"));

root.render(React.createElement(App));
