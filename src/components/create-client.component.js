import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateClient extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeClientName = this.onChangeClientName.bind(this);
    this.onChangeClientEmail = this.onChangeClientEmail.bind(this);
    this.onChangeClientRollno = this.onChangeClientRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  onChangeClientName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeClientEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeClientRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const clientObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };

    axios.post('http://localhost:4000/clients/create-client', clientObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      email: '',
      rollno: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeClientName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeClientEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeClientRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Client
        </Button>
      </Form>
    </div>);
  }
}
