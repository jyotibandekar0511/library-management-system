import React from 'react';
import { Link } from 'react-router-dom';
import BooksList from '../BooksList/BooksList';
import "./navbar.css";

const Navbar = () => {
    return (
        <div className='mainNav'>
            <div className='navbar'>
                <h3 style={{marginLeft: 20, width: '100%'}}>Library Management</h3>
                <Link to={"/login"}>
                <button style={{marginRight: 20, background: '#0065a2', color: '#ffff', border: 'none', outline:'none', margin: 20}}>LOGOUT</button>
                </Link>
            </div>
            {/* <BooksList /> */}
        </div>
    )
}

export default Navbar