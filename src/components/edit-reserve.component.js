import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditReserve extends Component {

  constructor(props) {
    super(props)

    this.onChangeReserveName = this.onChangeReserveName.bind(this);
    this.onChangeReserveEmail = this.onChangeReserveEmail.bind(this);
    this.onChangeReserveRollno = this.onChangeReserveRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/reserves/edit-reserve/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/reserves/update-reserve/' + this.props.match.params.id, reserveObject)
      .then((res) => {
        console.log(res.data)
        console.log('Reserve successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Reserve List 
    this.props.history.push('/reserve-list')
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
          Update Reserve
        </Button>
      </Form>
    </div>);
  }
}
