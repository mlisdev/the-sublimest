import React from "react";
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import { Container } from 'react-bootstrap'; 

function SearchArea(props) {
  return (
      <>
          <Container>
              <h1>Search Results</h1>
                  <SearchBar />
              <SearchResults />
          </Container>
    </>
  );
}

export default SearchArea;