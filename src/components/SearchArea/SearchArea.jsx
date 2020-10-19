import React from "react";
import './SearchArea.css'
import SearchBar from '../SearchBar/SearchBar'
import { Container } from 'react-bootstrap'; 

function SearchArea(props, history) {
  return (
      <>
      <Container>
          <div className="hero">
        <center>
            <h1>hello, {props.user.name}!</h1>
          </center>
                  <blockquote className="blockquote mb-0">
      <p>
        {' '}
                “He loved the soothing hour, when the last tints of light die away; when the stars, one by one, tremble through æther, and are reflected on the dark mirror of the waters; that hour, which, of all others, inspires the mind with pensive tenderness, and often elevates it to sublime contemplation.” 
                ― Ann Radcliffe, The Mysteries of Udolpho
        erat a ante.{' '}
            </p>
            </blockquote>
            </div>
        <SearchBar 
          user={props.user}
          history={history} />
          </Container>
    </>
  );
}

export default SearchArea;
