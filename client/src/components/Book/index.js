import React from "react";
import { Col } from "../Grid";
import Thumbnail from "../Thumbnail";
import API from "../../utils/API"

function Book(props) {

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => window.location.reload())
      .catch(err => console.log(err));
  }
  



  return (
    <>
      <Col size="xs-4 sm-2">
        <Thumbnail src={props.image} />
      </Col>
      <Col size="xs-8 sm-9">
        <h3>{props.title}</h3>
        <h5>{props.authors}</h5>
        <p>Synopsis:{props.synopsis} </p>
        <a rel="noreferrer noopener" target="_blank" href={props.link}>
          Go to Book!
        </a>
        <button className="btn btn-lg" onClick={() => deleteBook(props.id)} >Delete from Saved</button>
      </Col>
    </>
  );
}

export default Book;