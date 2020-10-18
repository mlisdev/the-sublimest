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
            <label>Summary</label>: <br />
            {trail.summary}
        </Card.Text>
          </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
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

