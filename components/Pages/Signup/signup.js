import React from 'react';
import { Link } from 'react-router-dom';
import "./signup.css";

const Signup = () => {
  return (
    <div className='signup__page'>
      <h1 style={{ marginTop: '50px' }}>Signup</h1>
      <form className='signup__form'>
        <label>First Name</label>
        <input type='text' placeholder='Enter your first name' />
        <label>Last Name</label>
        <input type='text' placeholder='Enter your last name' />
        <label>Email</label>
        <input type="email" placeholder='Enter your email' />
        <label>Password</label>
        <input type="password" placeholder='Enter your password' />
        <Link to={"/booklist"}>
          <button type='button' className='signupbtn' style={{width: '100%'}}>Sign Up</button>
        </Link>
        <p style={{ marginBottom: '50px', marginLeft: '60px' }}>Already have an account?
          <Link to={"/login"}>
            <span style={{ fontWeight: 'bold', marginBottom: '50px', cursor: 'pointer', }}>Login</span>
          </Link>
        </p>

      </form>
    </div >
  )
}

export default Signup