import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Card,  Row, Col, Form, Button, CardDeck } from 'react-bootstrap';
import reviewService from '../../utils/reviewService';
import './ReviewForm.css'

function ReviewForm (props) {
  const [review, setReview] = useState({
    review: '',
    rating: '3',
    updates: '',
    covid: '',
    trailId: props.trail.id,
  });
  const [change, setChange] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {reviewService.getAll(props.trail.id).then(res => {
      setReviews(res)
    })
  }, [change, props.trail.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    reviewService.create(review).then(res => setChange(!change));
  }

      return (
        <>
    <Col>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="review">
          <Form.Label>Review</Form.Label>
              <Form.Control
                type="review"
                placeholder="Example: 'this is the dopest place!" name="review"
                onChange={e => setReview({ ...review, ...{ review: (e.target.value) } })}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="rating">
      <Form.Label>Rating</Form.Label>
              <Form.Control as="select" defaultValue="3" name="rating"
              onChange={e => setReview({ ...review, ...{ rating: (e.target.value) } })}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Control>
            </Form.Group>
      <Form.Group as={Col} controlId="updates">
        <Form.Label>Trail Updates</Form.Label>
              <Form.Control type="update" placeholder="Example: 'north slope washed out :('" name="updates" 
                onChange={e => setReview({ ...review, ...{ updates: (e.target.value) } })}
          />
      </Form.Group>
      <Form.Group as={Col} controlId="covid">
          <Form.Label>Any COVID-19 updates? Is this trail closed?</Form.Label>
              <Form.Control type="covid" placeholder="Example: 'parks service shut this down because too many people were there'" name="covid" 
                onChange={e => setReview({ ...review, ...{ covid: (e.target.value) } })}
          />
        </Form.Group>
          <br />
                <Button type="submit">Submit</Button>
            </Form>
          </Col>

<Container>         
 <Row>
          <Col>
  
                <h3>Current Reviews</h3>
                <CardDeck>
             {reviews.map((review, idx) => (
            <Card border="success" className="card">
                 <Card.Header bg="success">Rating: {review.rating}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                          <div key={idx} >
                            <label>Review</label><br />
                            {review.review}<br />
                            <label>Any updates?</label><br />
                            {review.updates}<br />
                            <label>Any changes due to COVID?</label><br />
                            {review.covid}<br />
                            <Button>
                    {props.user._id === review.user ?
                      <div onClick={() => reviewService.delete(
                        review._id).then(res => setChange(!change))}>DELETE</div>
                                : null} 
                              </Button>
                        </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
             ))}
                  </CardDeck>
            </Col>
            </Row>
          </Container>

    </>
  );
}
export default ReviewForm;