import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditBedRoom extends Component {

  constructor(props) {
    super(props)

    this.onChangeBedRoomName = this.onChangeBedRoomName.bind(this);
    this.onChangeBedRoomEmail = this.onChangeBedRoomEmail.bind(this);
    this.onChangeBedRoomRollno = this.onChangeBedRoomRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/bedrooms/edit-bedroom/' + this.props.match.params.id)
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

  onChangeBedRoomName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeBedRoomEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeBedRoomRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const bedroomObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };

    axios.put('http://localhost:4000/bedrooms/update-bedroom/' + this.props.match.params.id, bedroomObject)
      .then((res) => {
        console.log(res.data)
        console.log('BedRoom successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to BedRoom List 
    this.props.history.push('/bedroom-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeBedRoomName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeBedRoomEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeBedRoomRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update BedRoom
        </Button>
      </Form>
    </div>);
  }
}
