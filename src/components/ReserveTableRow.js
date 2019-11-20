import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ReserveTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteReserve = this.deleteReserve.bind(this);
    }

    deleteReserve() {
        axios.delete('http://localhost:4000/reserves/delete-reserve/' + this.props.obj._id)
            .then((res) => {
                console.log('Reserve successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.rollno}</td>
                <td>
                    <Link className="edit-link" to={"/edit-reserve/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteReserve} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}