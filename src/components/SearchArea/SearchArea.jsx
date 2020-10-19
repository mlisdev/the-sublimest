import React from "react";
import './SearchArea.css'
import SearchBar from '../SearchBar/SearchBar'
import { Container } from 'react-bootstrap'; 

function SearchArea(props, history) {
  return (
      <>
      <Container>
        <center>
          <div className="hero">
            <h1>hello, {props.user.name}!</h1>
            </div>
        <SearchBar 
          user={props.user}
          history={history} />
          </center>
          </Container>
    </>
  );
}

export default SearchArea;
