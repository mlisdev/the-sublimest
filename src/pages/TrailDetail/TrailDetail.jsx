import React from "react";
import './TrailDetail.css';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import {
  Container, 
  Col, 
  Row
} from 'react-bootstrap'; 

function TrailDetail(props) {
  // const [details, setDetails] = useState(null);

  // const { id } = useParams();

  // useEffect(() => {
  //   trailAPI.getOne(id).then(res => setDetails(res))
  // }, [id]); 
  let trail = props.history.location.state.trail; 
  return (
    // details && (
    <>
      <Container>
        <Row>
         <Col xs={8} className="justify-content-center align-self-center"><h4>{trail.name}</h4></Col>
          </Row>
      <Row>
          <Col xs={2} className="infoRow"><b>Trail Location</b></Col>
          <Col md="auto" className="textRow">{trail.location}</Col>
        </Row>
        <Row>
          <Col xs={2} className="infoRow"><b> Difficulty</b></Col>
          <Col md="auto" className="textRow">{trail.difficulty}</Col>
        </Row>
        <Row>
          <Col xs={2} className="infoRow"><b>Star Rating</b></Col>
          <Col md="auto" className="textRow">{trail.stars}</Col>
      </Row>
        <Row>
          <Col xs={2} className="infoRow"><b>No. of Votes</b></Col>
          <Col md="auto" className="textRow">{trail.starVotes}</Col>
      </Row>
        <Row>
          <Col xs={2} className="infoRow"><b>Ascent</b></Col>
          <Col md="auto" className="textRow">{trail.ascent}</Col>
      </Row>
        <Row>
          <Col xs={2} className="infoRow"><b>Descent</b></Col>
          <Col md="auto" className="textRow">{trail.descent}</Col>
      </Row>
        <Row>
          <Col xs={2} className="infoRow justify-content-center align-self-center"><b>Summary</b></Col>
          <Col md={5} className="textRow justify-content-center align-self-center">{trail.summary}</Col>
        </Row>
        
        <br /> 
        <h3>Reviews</h3>
        <ReviewForm 
          trail={trail}
          user={props.user}
        />
        
    </Container>
        </>
    )
  // );
}

export default TrailDetail;

