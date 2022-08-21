import { useState } from 'react'
import Profile from './components/Profile'
import User from './components/User.js'
import Address from './components/Address'
import Business from './components/Business'

function App() {

  const [picture, setPicture] = useState('./img/profile.png')

  return (
    <div className="App container mt-5">
      <Profile picture={picture} />

      <div className='row'>
        <div className='col-6'>
          <User />
        </div>

        <div className='col-6'>
          <Address />
        </div>
      </div>

      <div className='row border border-primary'>
        <Business />
      </div>

    </div>
  );
}

export default App;
