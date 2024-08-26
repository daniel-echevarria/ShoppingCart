import { useEffect, useState } from "react";

const Article = ({ id }) => {
  const [imageUrl, setImageUrl] = useState("");

  const getArticleInfos = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const jsonRes = await response.json();
    setImageUrl(jsonRes.image);
  };

  getArticleInfos(id);
  return (
    <>
      <img src={imageUrl} alt="" />
      <p>My Cool Article</p>
      <input type="num" />
    </>
  );
};

export default Article;
