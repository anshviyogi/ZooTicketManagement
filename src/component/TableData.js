import React from 'react'
import {Table} from 'react-bootstrap'

function TableData() {
  return (
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Ticket Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Fee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </Table>
);
}


export default TableData