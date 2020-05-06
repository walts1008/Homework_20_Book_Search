import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";
// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({ image, title, authors, description, link }) {



  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getSaved({
      title: title,
      authors: authors,
      synopsis: description,
      link: link,
      image: image
    })
      .then(res => window.location.href = "./saved")
      .catch(err => console.log(err));
  }
  



  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h5>{authors}</h5>
            <p>Synopsis: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Go to Book!
            </a>
            <button onClick={handleFormSubmit}>Save Book!</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}