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
          <Link to={"shop"}>
            <div className="article-count">
              <span>🛒</span>
              <span>{articleCount}</span>
            </div>
          </Link>
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
