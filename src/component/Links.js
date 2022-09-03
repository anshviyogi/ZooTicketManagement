import React from 'react'
import { Link } from 'react-router-dom'
import './Links.css'

function Links() {
  return (
    <div className='links'>
        <h1 style={{textAlign:"center"}}>Zoo Ticket Management System</h1>
<div className='container'>

        <div className='link'>
        <Link to='/issue'>
            Issue Tickets
        </Link>
        </div>

<br/>

<Link to='/security'>
<div className='link'>
            Security Check
</div>
</Link>

</div>
    </div>
  )
}

export default Links