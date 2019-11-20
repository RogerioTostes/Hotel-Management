import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class BedRoomTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteBedRoom = this.deleteBedRoom.bind(this);
    }

    deleteBedRoom() {
        axios.delete('http://localhost:4000/bedrooms/delete-bedroom/' + this.props.obj._id)
            .then((res) => {
                console.log('BedRoom successfully deleted!')
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
                    <Link className="edit-link" to={"/edit-bedroom/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteBedRoom} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}