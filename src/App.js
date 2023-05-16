import React from "react";
import "./App.css";
import Book from "./Book";
import { books } from "./books";

function App() {
  return (
    <>
      <h2 className="heading">Amazon Best Sellers</h2>
      <section className="book-list">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            description={book.description}
            imgUrl={book.imgUrl}
            id={book.id}
            imgDescription={book.imgDescription}
          />
        ))}
      </section>
    </>
  );
}

export default App;
