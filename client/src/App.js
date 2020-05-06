import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";
import {BrowserRouter as Router, Route} from "react-router-dom"
import SavedBooks from "./components/SavedBooks/index"

function App() {

  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(bookSearch)
      .then(res => {setBooks(res.data.items); console.log(res.data.items)})
      .catch(err => console.log(err));
  };

  return (
    <Router>
      <>
      <Route path={["/", "/home"]}>
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="bookSearch"
                      value={bookSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Book"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!books.length ? (
              <h1 className="text-center">Saved Books</h1>
            ) : (
              <BookList>
                {books.map(book => {
                  return (
                    <BookListItem
                      key={book.volumeInfo.title}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      description={book.volumeInfo.description}
                      link={book.volumeInfo.previewLink}
                    />
                  );
                })}
              </BookList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
    </Route>
    <Route exact path={"/saved"}>
      <BookList>
        <SavedBooks />
      </BookList>
    </Route>
    </>
    </Router>
  );
}

export default App;