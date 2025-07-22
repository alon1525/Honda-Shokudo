import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallary from "./components/Gallary";
import Order from "./components/Order";
import Team from "./components/Team";
import Review from "./components/Review";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="main-content">
        <section id="Home">
          <Navbar />
          <Home />
        </section>
        <About />
        <Gallary />
        <Menu />
        <Team />
        <Review />
        <Order />
      
      </div>
      <Footer />
    </>
  );
}

export default App;
