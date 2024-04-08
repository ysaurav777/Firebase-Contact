import React from 'react'
import logo from '../Assests/logos_firebase.png';
import '../Styles/Header.scss';

const Header = () => {
  return (
    <nav class='nav-main'>
        <div class='nav-div'>
            <img src={logo} alt="logo"/>
            <h1 className='nav-heading'>Firebase Contact App</h1>
        </div>
    </nav>
  )
}
;
export default Header