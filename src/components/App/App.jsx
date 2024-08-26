import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Shop from "../Shop/Shop";

function App() {
  return (
    <>
      <header>
        <h1>Heracles</h1>
      </header>
      <nav>
        <Link to={"shop"}>Shop</Link>
        <Link to={"home"}>Home</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
