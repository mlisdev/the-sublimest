import React from "react";
import SearchBar from '../SearchBar/SearchBar'
import { Container } from 'react-bootstrap'; 

function SearchArea(props) {
  return (
      <>
          <Container>
                  <SearchBar />
          </Container>
    </>
  );
}

export default SearchArea;
