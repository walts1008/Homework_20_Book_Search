import React, { useState, useEffect } from "react";
import { Container, Row} from "../Grid";
import API from "../../utils/API";
import Book from "../Book/index"
//   // Deletes a book from the database with a given id, then reloads books from the db
//   function deleteBook(id) {
//     API.deleteBook(id)
//       .then(res => loadBooks())
//       .catch(err => console.log(err));
//   }

function SavedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => {setBooks(res.data); console.log(res)})
      .catch((err) => console.log(err));
  }

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          {books.map(book => {
                  return (
                    <Book
                      key={book.title}
                      title={book.title}
                      authors={book.authors}
                      image={book.image}
                      synopsis={book.synopsis}
                      link={book.link}
                      id={book._id}
                    />
                  );
                })}
        </Row>
      </Container>
    </li>
  );
}

export default SavedBooks;