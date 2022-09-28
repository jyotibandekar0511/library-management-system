import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./addbooks.css"

const AddBooks = () => {
    return (
        <div>
            <Navbar />
            <div className='addcontact'>
                <h2>Add a contact</h2>
                <form className='form'>
                    <label>Book Name : </label>
                    <input type="text" name='bookName' required='required' placeholder='Enter a Book Name...' />
                    <label style={{ marginRight: '970px' }}>ISBN</label>
                    <input type="Number" required='required' placeholder='ISBN' />
                    <label style={{ marginRight: '937px' }}>Category : </label>
                    <select>

                        <option>Physiology</option>
                        <option>Fantasy</option>
                        <option>Romance novel</option>
                        <option>Biography</option>
                        <option>Mystery</option>
                        <option>Children's literature</option>
                        <option>Memori</option>
                        <option>Autobigraphy</option>
                        <option>Dystopian</option>
                        <option>Nonfiction</option>
                    </select>
                    <label style={{ marginRight: '970px' }}>Quantity</label>
                    <input type="number" placeholder='Quantity' required='required' />

                    <label style={{ marginRight: '970px' }}>Price</label>
                    <input type="text" placeholder='price' required='required' />
                </form>
                <div className='addbtn'>
                    <button style={{marginRight: '20px'}}>CANCLE</button>
                    <Link to={"/booklist"}>
                    <button style={{marginRight: '80px', width: '90px'}}>ADD BOOk</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddBooks