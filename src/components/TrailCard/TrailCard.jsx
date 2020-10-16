import React from "react";
import { Link } from 'react-router-dom';
// import TrailDetail from '../../pages/TrailDetail'; 
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
          <Link
            to={{
              pathname: "/details", 
              state: {trail: props.trail},
            }}
            >More info</Link>
  </Card.Body>
        </Card>
    </>
  );
}

export default TrailCard;