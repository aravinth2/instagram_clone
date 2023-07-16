import React from 'react';
import './Home.css';
import Mainpage from './Mainpages/Mainpage';
import Navpage from './Navpages/Navpage';
import Sugession from './Sugession/Sugession';

function Home() {
  return (
    <div className='home'>

       <div className='navpage'>
          <Navpage/>
       </div>
       <div className='mainpage'>
           <Mainpage/>
       </div>
       <div className='sugession'>
           <Sugession/>
       </div>

    </div>
  )
}

export default Home;