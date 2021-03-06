import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
// import { Link } from "react-router-dom"; 
import { Col, Form, Button, CardColumns, Row } from 'react-bootstrap'; 
import trailService from '../../utils/trailService'; 
import TrailCard from '../TrailCard/TrailCard'; 
import './SearchBar.css'; 


function SearchBar(props) {
  const history = useHistory(); 
  const [zipcode, setZipcode] = useState(''); 

  const [results, setResults] = useState(null);

  const handleSubmit = (e) => { 
    e.preventDefault();
    trailService.search(zipcode).then(res => setResults(res)); 
    history.push(e.target.value)
  }
  return (
    <>
        <Form onSubmit={handleSubmit}>
            <Form.Row className="justify-content-center">
          <Col sm={4} className="my-1">
                <Form.Label htmlFor="inlineFormInputName">
                    Enter a Zipcode to Find a Hike: 
                </Form.Label>
                <Form.Control id="inlineFormInputName" placeholder="99755" onChange={e => setZipcode(e.target.value)} />
                      <br />
                <Button type="submit">Submit</Button>
                </Col>
            </Form.Row>
      </Form>
      { results && (
        <>

  <CardColumns>
          { results.trails.map((trail, idx, location, history) => (
            <TrailCard 
              trail={trail}
              key={idx}
              location={location}
              history={history}
            />
          ))}
          </CardColumns>

          </>
      )}
            
    </>
  );
}

export default SearchBar;

