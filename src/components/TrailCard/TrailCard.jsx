import React from "react";
import { Link } from 'react-router-dom';
// import TrailDetail from '../../pages/TrailDetail'; 
import {
  Card,
  CardColumns,
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
              <ListGroup.Item>Location</ListGroup.Item>
              <ListGroup.Item>{props.trail.location}</ListGroup.Item>
              Summary
              {props.trail.summary}
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