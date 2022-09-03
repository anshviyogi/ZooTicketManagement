import React, { useState } from 'react'
import {InputGroup,Form,Container,Table} from 'react-bootstrap'
import TableData from './TableData'

function ValidateMember(){
  const[search,setSearch] = useState('')
  const localData = JSON.parse(localStorage.getItem('tickets'))

return(
  <Container>
    <h1 style={{textAlign:"center"}}>Security Check</h1>
    <br/>
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search by Name / Ticket ID"
          onChange={e => setSearch(e.target.value)}
        />
      </InputGroup>

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
      
      {localData.filter(data => data.name.includes(search) || data.TicketId.includes(search)).map(newData =>{
          return(
        <>
        <tr>
        <td>{newData.TicketId}</td>
        <td>{newData.name}</td>
        <td>{newData.age}</td>
        <td>{newData.fee}</td>
        </tr>
        </>
        )
      })}
    </tbody>
  </Table>

      </Container>
)
}
export default ValidateMember