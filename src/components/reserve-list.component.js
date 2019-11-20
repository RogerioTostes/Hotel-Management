import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ReserveTableRow from './ReserveTableRow';


export default class ReserveList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reserves: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/reserves/')
      .then(res => {
        this.setState({
          reserves: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.reserves.map((res, i) => {
      return <ReserveTableRow obj={res} key={i} />;
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