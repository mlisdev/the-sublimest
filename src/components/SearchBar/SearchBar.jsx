import React from "react";
import { Row, Col, Form, Button } from 'react-bootstrap'; 

function SearchBar(props) {
  return (
    <>
    <h2>Search Bar</h2>
        <Form>
            <Form.Row className="justify-content-center">
                <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputName">
                    Enter a Zipcode: 
                </Form.Label>
                <Form.Control id="inlineFormInputName" placeholder="99755" />
                      <br />
                <Button type="submit">Submit</Button>
                </Col>
            </Form.Row>
        </Form>
            
    </>
  );
}

export default SearchBar;

