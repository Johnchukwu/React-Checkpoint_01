// src/App.jsx
import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Form, Button } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleInputChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(firstName);
  };

  return (
    <Container className="my-container">
      <Card className="my-card">
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Image />
            <Description />
            <Price />
          </Card.Text>
        </Card.Body>
      </Card>
      <Form onSubmit={handleSubmit} className="name-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter your name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter name" 
            value={firstName} 
            onChange={handleInputChange} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="greeting-section">
        {submittedName ? (
          <>
            <h2>Hello, {submittedName}!</h2>
            <img className="user-image" src="https://files.porsche.com/filestore/image/multimedia/none/992-c4s-modelimage-sideshot/thumbwhite/9010a6a0-d980-11eb-80d9-005056bbdc38;sK;twebp/porsche-thumbwhite.webp" alt="User" />
          </>
        ) : (
          <h2>Hello, there!</h2>
        )}
      </div>
    </Container>
  );
};

export default App;
