import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}
