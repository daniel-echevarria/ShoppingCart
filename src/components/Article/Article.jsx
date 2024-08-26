import { useEffect, useState } from "react";
import "./Article.css";

const Article = ({ id }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [num, setNum] = useState(1);

  const getArticleInfos = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const jsonRes = await response.json();
    setImageUrl(jsonRes.image);
    setDescription(jsonRes.description);
  };

  getArticleInfos(id);
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <p className="desc">{description}</p>
      <input type="num" value={num} />
    </div>
  );
};

export default Article;
