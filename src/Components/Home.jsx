import React from 'react'
import '../Styles/Home.scss';

const Home = () => {
  return (
    <main className='home-main'>
      <div>
        <div className='search-div'>
          <div className='search-input'>
            <input className='input-area' placeholder='Search Contact'/>
          </div>
          <div className='add-contact'>
            <h1>+</h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;