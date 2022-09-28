import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import "./bookslist.css";

const BooksList = () => {
  return (
    <div className='bookslist'>
      <Navbar />
      <div className='bookt'>
        <h1 style={{ paddingLeft: '48px'}}>BooksList</h1>
        <Link to={"/addbook"}>
        <button className='btn' style={{ marginRight: '110px'}}>Add Book</button>
        </Link>
      </div>
      <div>
      <table className='booktable'>
        <thead>
          <tr className='bookhead'>
            <th>Name</th>
            <th>ISBN</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Awaialable</th>
            <th>Price</th>
          </tr>
        </thead>
        
        <tbody>
          <tr >
            <td >Atomic Habits</td>
            <td>0923456</td>
            <td>Physiology</td>
            <td>10</td>
            <td>9</td>
            <td>500/-</td>
          </tr>
          <tr >
            <td >American Gods</td>
            <td>0825556</td>
            <td>Fantasy</td>
            <td>50</td>
            <td>39</td>
            <td>200/-</td>
          </tr>
          <tr >
            <td >Outlander</td>
            <td>056456</td>
            <td>Romance novel</td>
            <td>30</td>
            <td>15</td>
            <td>700/-</td>
          </tr>
          <tr >
            <td >Educated</td>
            <td>0923456</td>
            <td>Biography</td>
            <td>80</td>
            <td>79</td>
            <td>1500/-</td>
          </tr>
          <tr >
            <td >The Silent Patient</td>
            <td>0873456</td>
            <td>Mystery</td>
            <td>30</td>
            <td>19</td>
            <td>800/-</td>
          </tr>
          <tr >
            <td >Charlotte's Web</td>
            <td>0929856</td>
            <td>Children's literature</td>
            <td>80</td>
            <td>89</td>
            <td>400/-</td>
          </tr>
          <tr >
            <td >The Art of Memory</td>
            <td>0923400</td>
            <td>Memori</td>
            <td>50</td>
            <td>29</td>
            <td>1400/-</td>
          </tr>
          <tr >
            <td >The Diary of a Young Girl</td>
            <td>0900456</td>
            <td>Autobigraphy</td>
            <td>70</td>
            <td>67</td>
            <td>1500/-</td>
          </tr>
          <tr >
            <td >The Handmaid's Tale</td>
            <td>0672345</td>
            <td>Dystopian</td>
            <td>60</td>
            <td>15</td>
            <td>1100/-</td>
          </tr>
          <tr >
            <td >In Could Blood</td>
            <td>0023457</td>
            <td>Nonfiction</td>
            <td>20</td>
            <td>8</td>
            <td>600/-</td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </div>
  )
}

export default BooksList