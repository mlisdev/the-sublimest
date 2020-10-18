import React from "react";
import './SearchArea.css'
import SearchBar from '../SearchBar/SearchBar'
import { Container } from 'react-bootstrap'; 

function SearchArea(props, history) {
  return (
      <>
      <Container>
        <center>
          <span className="banner"><mark>Welcome, {props.user.name}</mark></span>
        <SearchBar 
          user={props.user}
          history={history}
                  />
          </center>
          </Container>
    </>
  );
}

export default SearchArea;
