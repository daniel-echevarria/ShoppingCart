import { useEffect, useState } from "react";
import "./Article.css";
import { json, useOutletContext } from "react-router-dom";

const Article = ({ id }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [num, setNum] = useState(1);
  const [price, setPrice] = useState("");
  const myFunk = useOutletContext();

  useEffect(() => {
    const getArticleInfos = async (id) => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      console.log(response.status);
      const jsonRes = await response.json();
      setImageUrl(jsonRes.image);
      setTitle(jsonRes.title);
      setPrice(jsonRes.price);
    };
    getArticleInfos(id), [id];
  });

  const handleCartChange = () => {
    myFunk(num);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setNum(inputValue);
  };

  return (
    <div className="card">
      <div className="item">
        <img src={imageUrl} alt="" />
        <p className="title">{title}</p>
      </div>
      <div className="cart">
        <p> {price} $ </p>
        <p>x</p>
        <input
          type="number"
          min={0}
          max={99}
          value={num}
          onChange={handleChange}
        />
        <button onClick={handleCartChange}>Add To Cart 🛒</button>
      </div>
    </div>
  );
};

export default Article;
