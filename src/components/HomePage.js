import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'



const HomePage = () => {
  return (
    <div className='container d-flex justify-content-space-around'>
        <div className='flex-fill'>
            <h3>Signup as Student</h3>
            {/* <Link to='/studentsignup' className='btn btn-primary'>Signup</Link> */}
            <Card.Link  className="btn btn-primary" style={{color: "white"}}href="/studentsignup">Signup</Card.Link>
        </div>
        <div className='flex-fill'>
            <h3>Signup as Tm</h3>
            <Card.Link  className="btn btn-primary" style={{color: "white"}}href="/tm/signup">Signup</Card.Link>
        </div>
    </div>
  )
}

export default HomePage