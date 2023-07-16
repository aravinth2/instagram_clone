import React from 'react';
import './Sugession.css';
import profile from './profile.jpg';
import logo1 from '../datas/images/logo1.jpg';
import logo4 from '../datas/images/logo4.jpg';
import logo5 from '../datas/images/logo5.jpg';
import logo6 from '../datas/images/logo6.jpg';
import logo7 from '../datas/images/logo7.jpg';

function Sugession() {
  return (
    <div className='sugest'>

       <div className='switch'>
        <img alt='' src={profile} />
          <div className='names'>
               <p className='username'><b>tom_cruise</b></p>
               <p className='name'>TOM CRUISE</p>
          </div>
          <a href='#'><b>Switch</b></a>
       </div>
       <div className='sugestname'>
        <p className='sugesthead'><b>Suggest For You</b></p>
        <p className='sugestbtn'>see all</p>
       </div>

       <div className='sugestlist'>
           <div className='boxes'>
              <img alt='' src={logo1} />
              <div className='sugname'>
                <p className='sugusername'><b>Luffy</b></p>
                <h6>followed by username1</h6>
                </div>
                <a href='#'><b>follow</b></a>
          </div>
       </div>

       <div className='sugestlist'>
           <div className='boxes'>
              <img alt='' src={logo4} />
              <div className='sugname'>
                <p className='sugusername'><b>Straw Hat</b></p>
                <h6>followed by Monkey D </h6>
                </div>
                <a href='#'><b>follow</b></a>
          </div>
       </div>

       <div className='sugestlist'>
           <div className='boxes'>
              <img alt='' src={logo5} />
              <div className='sugname'>
                <p className='sugusername'><b>Monkey D Luffy</b></p>
                <h6>Suggest for you  1other</h6>
                </div>
                <a href='#'><b>follow</b></a>
          </div>
       </div>

       <div className='sugestlist'>
           <div className='boxes'>
              <img alt='' src={logo6} />
              <div className='sugname'>
                <p className='sugusername'><b>Portugas D Ace</b></p>
                <h6>followed by Straw Hat </h6>
                </div>
                <a href='#'><b>follow</b></a>
          </div>
       </div>

       <div className='sugestlist'>
           <div className='boxes'>
              <img alt='' src={logo7} />
              <div className='sugname'>
                <p className='sugusername'><b>Sabo</b></p>
                <h6>followed by Portugas    </h6>
                </div>
                <a href='#'><b>follow</b></a>
          </div>
       </div>

        <div className='options'>
        <p>About. Help. Press. Api. Jobs. Privacy. Terms. <br/> Location. Language. Meta Verifies</p>
        <a href='#'>@2023 INSTAGRAM FROM META</a>
       </div>

    </div>
  )
}

export default Sugession;