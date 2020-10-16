import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Form, Button } from 'react-bootstrap'
import reviewService from '../../utils/reviewService'
import Reviews from '../../components/Reviews/Reviews'

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
          <Reviews 
            trail={props.trail}
            reviews={props.reviews}
            user={props.user}
            review={review}
          />   
    </>
  );
}


export default ReviewForm;

