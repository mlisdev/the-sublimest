import React from "react";
import SearchBar from '../SearchBar/SearchBar'
import { Container } from 'react-bootstrap'; 

function SearchArea(props, history) {
  return (
      <>
      <Container>
         <p className="banner">Welcome, {props.user.name}</p>
        <SearchBar 
          user={props.user}
          history={history}
                  />
          </Container>
    </>
  );
}

export default SearchArea;
