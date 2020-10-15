import React from "react";
import {Link} from 'react-router-dom';
import { Card } from 'react-bootstrap'; 

function TrailCard(props) {
  return (
    <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Trail Card</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to='/detail'>More info</Link>
  </Card.Body>
</Card>
    </>
  );
}

export default TrailCard;