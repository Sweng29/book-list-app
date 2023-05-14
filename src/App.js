import React from "react";
import "./App.css";

const title = "The Legend of Zelda™";
const description =
  "Tears of the Kingdom – The Complete Official Guide: Collector's Edition";
const imgUrl = "./images/pokemon.jpeg";
const imgDescription = "Pokemon";

const Book = (props) => (
  <article className="book">
    <img src={props.imgUrl} alt={props.imgDescription} />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </article>
);

function App() {
  return (
    <section className="book-list">
      <Book
        title={title}
        description={description}
        imgUrl={imgUrl}
        imgDescription={imgDescription}
      />
      <Book
        title={title}
        description={description}
        imgUrl={imgUrl}
        imgDescription={imgDescription}
      />
      <Book
        title={title}
        description={description}
        imgUrl={imgUrl}
        imgDescription={imgDescription}
      />
      <Book
        title={title}
        description={description}
        imgUrl={imgUrl}
        imgDescription={imgDescription}
      />
    </section>
  );
}

export default App;
