import React from "react";
import './SearchArea.css'
import SearchBar from '../SearchBar/SearchBar'
import { Container, Col, Row } from 'react-bootstrap'; 

function SearchArea(props, history) {
  return (
      <>
      <Container>
          <div className="hero">
        <center>
            <h1>hello, {props.user.name}!</h1>
          </center>
          </div>

        <SearchBar 
          user={props.user}
            history={history} />

          </Container>
    </>
  );
}

export default SearchArea;
