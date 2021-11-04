import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import RouterPage from "./routers/router";

const App: React.FC = () => {
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
