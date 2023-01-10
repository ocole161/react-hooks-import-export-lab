import React from "react";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import {image} from "./About"

const username = "Liza"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
