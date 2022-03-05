import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {

      FirstName: '',
      LastName: '',
      Phone: '',
      Email: '',
      validchecked: 'false'
    }
  }

  handlesubmit(e) {
    e.preventDefault()
    console.log(e.target);
    this.props.addcontact(this.state)


    e.target.reset();
    this.handleReset()


  }

  handleChange(e) {
  if(e.target.value!=='')
    { this.setState({ [e.target.name]: e.target.value }) }

  }
  handleReset = () => {
    this.setState({
      FirstName: '',
      LastName: '',
      Phone: '',
      Email: ''
    });
  };



  render() {

    // console.log(this.state);

    return (
      <Form onSubmit={(e) => this.handlesubmit(e)}>
        <Form.Group className="m-3 d-flex" controlId="formBasicFirstName">
          <Form.Label>FirstName:</Form.Label>
          <Form.Control type="text" name="FirstName" placeholder="Enter first name" onChange={(e) => this.handleChange(e)} />
        </Form.Group>
        <Form.Group className="m-3 d-flex" controlId="formBasicLastName">
          <Form.Label>LastName:</Form.Label>
          <Form.Control type="text" name="LastName" placeholder="Enter last name" onChange={(e) => this.handleChange(e)} />
        </Form.Group>
        <Form.Group className="m-3 d-flex" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="Email" placeholder="Enter Email" onChange={(e) => this.handleChange(e)} />
        </Form.Group>
        <Form.Group className="m-3 d-flex" controlId="formBasicPhone">
          <Form.Label>Phone:</Form.Label>
          <Form.Control type="number" name="Phone" placeholder="Enter phone" onChange={(e) => this.handleChange(e)} />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}
