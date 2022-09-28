import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import "./login.css";

const Login = () => {






  return (
    <div className='Login__page'>
      <h1 style={{color: '#0065a2', fontSize: '40px'}}>Library Management</h1>
        <h1 style={{marginTop: '20px'}}>Login</h1>
        <form className='container'>
        
            <label style={{marginRight: 320}}>Email</label>
            <input  type="email" placeholder='Enter your email' required='required' />
            
            <label>Password</label>
            <input type="password" placeholder='Enter your password'required='required'/>
            
            <Link to={"/booklist"} >
            <button type='button' className='loginbtn' style={{width: '100%'}}>Login</button>
            </Link>
            <p className='details'>Forgotten your login details? <span style={{fontWeight: 'bold', cursor: 'pointer'}}>Get hepl with Signup.</span></p>

            <hr style={{color:'#aaa', width: '100%'}}></hr>

            <p style={{marginBottom: '50px'}}>Don't have an account? 
             <Link to={"/signup"}>
              <span style={{fontWeight: 'bold', marginBottom: '50px', cursor: 'pointer',}}>Sign up.</span>
              </Link>
              </p>
        </form>
    </div>
  )
}

export default Login