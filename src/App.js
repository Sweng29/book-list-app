import React from "react";
import "./App.css";

const firstBook = {
  description: "Timeless Lessons On Wealth, Greed, And Happiness",
  title: "The Psychology Of Money",
  imgUrl: "./images/money.jpg",
  imgDescription: "The Psychology Of Money",
};

const secondBook = {
  description: "Making Energy Poverty History with an Energy Mix",
  title: "A Just Transition",
  imgUrl: "./images/transition.jpeg",
  imgDescription: "A Just Transition",
};

const Book = ({ imgUrl, imgDescription, title, description }) => (
  <article className="book">
    <img src={imgUrl} alt={imgDescription} />
    <h2>{title}</h2>
    <p>{description}</p>
  </article>
);

function App() {
  return (
    <section className="book-list">
      <Book
        title={firstBook.title}
        description={firstBook.description}
        imgUrl={firstBook.imgUrl}
        imgDescription={firstBook.imgDescription}
      />
      <Book
        title={secondBook.title}
        description={secondBook.description}
        imgUrl={secondBook.imgUrl}
        imgDescription={secondBook.imgDescription}
      />
      <Book
        title={firstBook.title}
        description={firstBook.description}
        imgUrl={firstBook.imgUrl}
        imgDescription={firstBook.imgDescription}
      />
      <Book
        title={secondBook.title}
        description={secondBook.description}
        imgUrl={secondBook.imgUrl}
        imgDescription={secondBook.imgDescription}
      />
    </section>
  );
}

export default App;
