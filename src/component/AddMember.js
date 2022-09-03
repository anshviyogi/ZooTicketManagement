import React, { useState } from 'react'
import {Form,Button, Container} from 'react-bootstrap'
import {v4 as uuid} from 'uuid'
function AddMember() {
    const[age,setAge] = useState('')
    const[fee,setFee] = useState('')
    const[name,setName] = useState('')
    const[uid,setUid] = useState(uuid())

    function ageHandler(){
        if(age<=2){
            setFee(0)
        }else if(age>2 && age<18){
            setFee(100)
        }else if(age>=18 && age<60){
            setFee(500)
        }else{
            setFee(300)
        }
    }

    var data = JSON.parse(localStorage.getItem('tickets') || "[]")

    function issueTicket(){
        const arrayData = {
            TicketId:uid.split('-')[0],
            name:name,
            age:age,
            fee:fee
        }

        data.push(arrayData)
        localStorage.setItem('tickets',JSON.stringify(data))
    }


  return (
    <div className='addMember'>
        <h1 style={{textAlign:"center"}}>Issue Ticket</h1>
<Container>

        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name" value={name} onChange={e =>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <div style={{display:"flex"}}>
        <Form.Control type="number" placeholder="Enter Age" value={age} onChange={e => setAge(e.target.value)}/>
        <Button onClick={ageHandler}>Validate Age</Button>
        </div>
      </Form.Group>
      <h1>Registration Fee : ₹{fee}</h1>
      <h3>Ticket Number : {uid.split('-')[0]}</h3>
      <div className="d-grid gap-2">
      <Button variant="primary" size="sm" type='submit' onClick={issueTicket}>
        Issue
      </Button>
    </div>

    </Form>

    </Container>
    </div>
  )
}

export default AddMember