import React from "react";
import { Link } from 'react-router-dom';
import './TrailCard.css'; 
import {
  Card,
  ListGroup
} from 'react-bootstrap'; 

function TrailCard(props) {
  return (
    <>
    
<Card sm>
  <Card.Img variant="top" src={props.trail.imgMedium} />
  <Card.Body>
          <Card.Title>{props.trail.name}</Card.Title>
    <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item><b>Location</b></ListGroup.Item>
              <ListGroup.Item>{props.trail.location}</ListGroup.Item>
              <ListGroup.Item><b>Summary</b></ListGroup.Item>
              <ListGroup.Item>{props.trail.summary}</ListGroup.Item>
      </ListGroup>
          </Card.Text>
  </Card.Body>
        <Card.Body>
          <span className="traillinks">
              <Link  to={{
              pathname: "/details", 
              state: {trail: props.trail},
            }}>More Info on Sublimest</Link> &nbsp; &nbsp; &nbsp; 
            <a href={props.trail.url} rel="noopener noreferrer" target="_blank"><img src="logoHex2.svg" width="50px" alt="HikingProject logo"></img></a>
            </span>
            </Card.Body>

        </Card>
    </>
  );
}

export default TrailCard;