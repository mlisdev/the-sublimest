import React from "react";
import SearchBar from '../SearchBar/SearchBar'
import { Container } from 'react-bootstrap'; 

function SearchArea(props) {
  return (
      <>
          <Container>
              <h1>Search Results</h1>
                  <SearchBar />
          </Container>
    </>
  );
}

export default SearchArea;
