import React from "react";
import './TrailDetail.css';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import {
  Container, 
  Col, 
  Row, 
  ListGroup, 
  Card, 
  ListGroupItem
} from 'react-bootstrap'; 

function TrailDetail(props) {

  let trail = props.history.location.state.trail; 
  return (
    <>
      <Container>
        <Row>
        <Col>
        <Card style={{ width: '100%' }}>
        <Card.Body>
            <Card.Title>{trail.name}</Card.Title>
        <Card.Text>
            <label className="infoz">Location</label>: {trail.location}
        </Card.Text>
          </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem><label className="infoz">Length</label>: {trail.length}</ListGroupItem>
              <ListGroupItem><label className="infoz">Difficulty</label>: {trail.difficulty}</ListGroupItem>
              <ListGroupItem><label className="infoz">Ascent</label>: {trail.ascent}</ListGroupItem>
              <ListGroupItem><label className="infoz">Descent</label>: {trail.descent}</ListGroupItem>
              <ListGroupItem><label className="infoz">Star Rating</label>: {trail.stars}</ListGroupItem>
              <ListGroupItem><label className="infoz"># of Votes</label>: {trail.starVotes}</ListGroupItem>
              <ListGroupItem><label className="infoz">Summary</label>: {trail.summary}</ListGroupItem>

            </ListGroup>
            <Card.Body>
                <Card.Link href={trail.url}><img src="logoHex2.svg" width="50px" alt="HikingProject logo"></img></Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <ReviewForm 
          trail={trail}
          user={props.user}
        />
</Row>
    </Container>
        </>
    )
}

export default TrailDetail;

