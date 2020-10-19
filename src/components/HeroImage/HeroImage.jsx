import React from 'react';
import {
  Jumbotron
} from 'react-bootstrap'; 

function HeroImage(props) {
    return (
        <Jumbotron className="hero">
            <img src="hiking-unsplash.jpg" width="100%" alt="a girl hiking"></img>
        </Jumbotron>
    )
}; 

export default HeroImage;