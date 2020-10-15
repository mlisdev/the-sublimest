import React from "react";
import { Link } from 'react-router-dom';
// import TrailDetail from '../../pages/TrailDetail'; 
import { Card } from 'react-bootstrap'; 

function TrailCard(props) {
  return (
    <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.trail.imgMedium} />
  <Card.Body>
          <Card.Title>{props.trail.name}</Card.Title>
    <Card.Text>
            <dl>
              <dt>Location</dt>
              <dd>{props.trail.location}</dd>
              <dt>Summary</dt>
              <dd>{props.trail.summary}</dd>
      </dl>
    </Card.Text>
          <Link exact to='/details'>More info</Link>
  </Card.Body>
</Card>
    </>
  );
}

export default TrailCard;