import React, { useState } from "react";
import { useEffect } from "react";
// import { Col, Form, Button } from 'react-bootstrap'
import reviewService from '../../utils/reviewService'

function Reviews(props) {
const [change, setChange] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {reviewService.getAll(props.trail.id).then(res => {
      setReviews(res)
    })
  }, [change, props.trail.id]);
    
    return (
   <>
    {reviews.map((review, idx) => (
            <div key={idx} >
                <div>{review.review}</div>
                <div>{review.rating}</div>
                <div>{review.updates}</div>
                <div>{review.covid}</div>
                {props.user._id === review.user ?
                    <div onClick={() => reviewService.delete(
                        review._id).then(res => setChange(!change))}>DELETE</div>
                    : null}
            </div>
        ))
            }
            </>)
            
} 

export default Reviews; 