import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Developers from "./components/Developers";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Developers />
      <Subscribe />
      <Footer />
    </div>
  );
}
