import React from "react";
import "./App.css";

const Book = ({ imgUrl, imgDescription, title, description, id }) => {
  return (
    <article className="book">
      <span className="book-indexes">{`# ${id}`}</span>
      <img src={imgUrl} alt={imgDescription} />
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
};

export default Book;
