import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import RouterPage from "./routers/router";

const App: React.FC = () => {
  // const [nav, setNav] = React.useState(["Home", "Sign In", "Sign Up"]);

  // if (localStorage.getItem("token")) {
  //   setNav(["Home", "New Article", "Setting", `User`]);
  // }

  return (
    <Router>
      <div className="App">
        <Header />
        <RouterPage />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
