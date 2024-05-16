import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className=' d-flex justify-content-center align-items-center  vh-100'>
      <div className=' p-3 rounded w-25   border border-dark'>
        <form action="">
          <div className='mb-3 mt-3'>
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" placeholder="enter name" className='form-control rounded-0' />
          </div>
          <div className='mb-3 mt-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="enter email" className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="enter password" className='form-control rounded-0' />
          </div>
          <button className='btn btn-success w-100 rounded-1 mb-3'><strong>SignUp</strong></button>
          <button className='text-decoration-none btn btn-default border rounded-1 w-100 bg-light'><strong>Login</strong></button>

        </form>
      </div>
      
    </div>
  )
}
export default SignUp;