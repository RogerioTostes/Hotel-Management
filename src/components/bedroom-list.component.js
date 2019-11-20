import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BedRoomTableRow from './BedRoomTableRow';


export default class BedRoomList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bedrooms: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/bedrooms/')
      .then(res => {
        this.setState({
          bedrooms: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.bedrooms.map((res, i) => {
      return <BedRoomTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}