import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [articleCount, setArticleCount] = useState(0);

  const handleCartUpdate = (e) => {
    const num = Number(e);
    setArticleCount(articleCount + num);
  };

  return (
    <>
      <header>
        <h1>Heracles</h1>
        <nav>
          <Link to={"home"}>Home</Link>
          <Link to={"shop"}>Shop</Link>
          <Link to={"cart"}>Go To Cart</Link>
          <div className="article-count">
            <span>Articles in your cart</span>
            <span>{articleCount}</span>
          </div>
        </nav>
      </header>
      <main>
        <Outlet context={handleCartUpdate} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
