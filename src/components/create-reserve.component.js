import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateReserve extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeReserveName = this.onChangeReserveName.bind(this);
    this.onChangeReserveEmail = this.onChangeReserveEmail.bind(this);
    this.onChangeReserveRollno = this.onChangeReserveRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  onChangeReserveName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeReserveEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeReserveRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const reserveObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };

    axios.post('http://localhost:4000/reserves/create-reserve', reserveObject)
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
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeReserveName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeReserveEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeReserveRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Reserve
        </Button>
      </Form>
    </div>);
  }
}
