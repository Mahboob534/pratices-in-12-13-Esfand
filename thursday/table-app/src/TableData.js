import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TableData extends Component {
        constructor(props){
            super(props)
            this.state={

            }
        }




  render() {
    return (
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
  {this.props.contact.map(row => (
                <tr className='bg-light'>
                    <td>{row.FirstName}</td>
                    <td>{row.LastName}</td>
                    <td>{row.Email}</td>
                    <td>{row.Phone}</td>
                </tr>
  ))}
  </tbody>
</Table>
    )
  }
}
