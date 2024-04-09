import React from 'react';
import '../Styles/AddContact.scss';
import { PiUserCircleLight } from "react-icons/pi";
import { RiEditCircleLine } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
//Add add-con in addcontact


const Contact = (props) => {
  return (
    <div className='main-addcon'>
      <div>
        <PiUserCircleLight className='user-icon'/>
      </div>
      <div className='con-detail'>
        <div>
          <h4>{props.name}</h4>
        </div>
        <div>
          <p>{props.email}</p>
        </div>
      </div>
      <div>
        <button  className='edit-icon'><RiEditCircleLine /></button>
      </div>
      <div>
        <button className='trash-icon'><FaTrash /></button>
      </div>
    </div>
  )
}

export default Contact;