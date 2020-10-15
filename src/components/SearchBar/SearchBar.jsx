import React, {useEffect, useState}  from "react";
import { Col, Form, Button } from 'react-bootstrap'
import trailService from '../../utils/trailService'; 
import TrailCard from '../TrailCard/TrailCard'


function SearchBar(props) {
  const [zipcode, setZipcode] = useState(''); 

  const [results, setResults] = useState(null); 

  const handleSubmit = (e) => { 
    e.preventDefault();
    trailService.search(zipcode).then(res => setResults(res)); 
  }
  return (
    <>
    <h2>Search Bar</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Row className="justify-content-center">
                <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputName">
                    Enter a Zipcode: 
                </Form.Label>
                <Form.Control id="inlineFormInputName" placeholder="99755" onChange={e => setZipcode(e.target.value)} />
                      <br />
                <Button type="submit">Submit</Button>
                </Col>
            </Form.Row>
      </Form>
      { results && (
        <div>
          <h1>Search Results</h1>
          { results.trails.map((trail, idx) => (
            <TrailCard 
              trail={trail}
              key={idx}
            />
          ))}
        </div>
      )}
            
    </>
  );
}

export default SearchBar;
