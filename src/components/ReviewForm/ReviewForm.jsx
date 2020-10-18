import React, { useState, useEffect } from "react";
import { Container, Card,  Row, Col, Form, Button, CardColumns } from 'react-bootstrap';
import reviewService from '../../utils/reviewService';
import './ReviewForm.css'

function ReviewForm(props) {
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
            <h4>Been on this trail? Leave a review!</h4><br />
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="review">
          <Form.Label>What did you think?</Form.Label>
              <Form.Control
                type="review"
                placeholder="Example: 'this is the dopest place!" name="review"
                onChange={e => setReview({ ...review, ...{ review: (e.target.value) } })}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="rating">
      <Form.Label>Overall Rating:</Form.Label>
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
        <Form.Label>Are there any trail updates for future hikers?</Form.Label>
              <Form.Control type="update" placeholder="Example: 'north slope washed out :('" name="updates" 
                onChange={e => setReview({ ...review, ...{ updates: (e.target.value) } })}
          />
      </Form.Group>
      <Form.Group as={Col} controlId="covid">
          <Form.Label>Has COVID-19 impacted this trail? Too many people? Trail closed? Let others know!</Form.Label>
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
                <CardColumns>
             {reviews.map((review, idx) => (
            <Card border="success" className="card">
                 <Card.Header bg="success">Rating: {review.rating}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                     <div key={idx} >
                       <label className="cards">Reviewer</label> {props.user.name}<br /> <br />
                            <label className="cards">Review </label><br />
                       {review.review}<br />
                       <br />
                            <label className="cards">Any updates on the trail?</label><br />
                       {review.updates}<br /> 
                       <br />
                            <label className="cards">Any changes due to COVID?</label><br />
                       {review.covid}<br />
                       <br />
                       <center>
                            <Button>
                    {props.user._id === review.user ?
                      <div onClick={() => reviewService.delete(
                        review._id).then(res => setChange(!change))}>DELETE</div>
                                : null} 
                       </Button>
                       </center>
                        </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
             ))}
                  </CardColumns>
            </Col>
            </Row>
          </Container>

    </>
  );
}
export default ReviewForm;