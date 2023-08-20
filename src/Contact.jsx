import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Naav.css' 

function Contact() {
  return (
    <div>
      <h2>CONTACT US</h2>
      <div className="forms">
      <Form className='form'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Name" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>PHONE NUMBER</Form.Label>
        <Form.Control type="email" placeholder="Enter your Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>EMAIL ADDRESS</Form.Label>
        <Form.Control type="email" placeholder=" Enter your Email Adress" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>ENTER A MESSAGE</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button as="input" type="submit" value="Submit" />
      </Form>
      
      </div>
    </div>
  )
}

export default Contact