import React from "react";
import "./App.css";

const BookTitle = () => <h2>The Legend of Zelda™</h2>;
const BookDescription = () => (
  <p>Tears of the Kingdom – The Complete Official Guide: Collector's Edition</p>
);
const BookImage = () => <img src="./images/pokemon.jpeg" alt="Pokemon™" />;

const Book = () => (
  <article className="book">
    <BookImage />
    <BookTitle />
    <BookDescription />
  </article>
);

function App() {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

export default App;
