import React from 'react'
import '../Styles/Home.scss';
import Contact from '../Assests/Hands_Contact.png';
import { IoSearchSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

const Home = () => {
  return (
    <main className='home-main'>
      <div>
        <div className='search-div'>
          <div>
            <IoSearchSharp className='icons-search'/>
          </div>
          <div className='search-input'>
            <input className='input-area' placeholder='Search Contact'/>
          </div>
          <div className='add-contact'>
            <GoPlus className='plus-sym'/>
          </div>
        </div>
      </div>
      <div className='home-contact'>
          <div className='home1-contact'>
            <div>
              <img src={Contact} alt="No Contact"/>
            </div>
            <div>
              <h1 className='no-contact'>No Contact Found</h1>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Home;