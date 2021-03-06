import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateClient extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeClientID = this.onChangeClientID.bind(this);
    this.onChangeClientName = this.onChangeClientName.bind(this);
    this.onChangeClientCPF = this.onChangeClientCPF.bind(this);
    this.onChangeClientAddress = this.onChangeClientAddress.bind(this);
    this.onChangeClientEmail = this.onChangeClientEmail.bind(this);
    this.onChangeClientTelephone = this.onChangeClientTelephone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      id: '',
      name: '',
      cpf: '',
      address: '',
      email: '',
      telephone: ''
    }
  }

  onChangeClientID(e) {
    this.setState({ id: e.target.value })
  }

  onChangeClientName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeClientCPF(e) {
    this.setState({ cpf: e.target.value })
  }

  onChangeClientAddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangeClientEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeClientTelephone(e) {
    this.setState({ telephone: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const clientObject = {
      id: this.state.id,
      name: this.state.name,
      cpf: this.state.cpf,
      address: this.state.address,
      email: this.state.email,
      telephone: this.state.telephone
    };

    axios.post('http://localhost:4000/clients/create-client', clientObject)
      .then(res => console.log(res.data));

    this.setState({
      id: '',
      name: '',
      cpf: '',
      address: '',
      email: '',
      telephone: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>

      <Form.Group controlId="ID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" value={this.state.id} onChange={this.onChangeClientID} />
        </Form.Group>

      <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeClientName} />
        </Form.Group>

        <Form.Group controlId="CPF">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="text" value={this.state.cpf} onChange={this.onChangeClientCPF} />
        </Form.Group>

        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.address} onChange={this.onChangeClientAddress} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeClientEmail} />
        </Form.Group>

        <Form.Group controlId="Telephone">
          <Form.Label>Telephone</Form.Label>
          <Form.Control type="text" value={this.state.telephone} onChange={this.onChangeClientTelephone} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Client
        </Button>
      </Form>
    </div>);
  }
}
