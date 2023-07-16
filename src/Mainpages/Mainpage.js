import React from 'react';
import './Mainppage.css';
import {DATA} from '../datas/datas';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import {AiOutlineHeart} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import {TbShare3} from 'react-icons/tb';
import {MdSaveAlt} from 'react-icons/md';


export default function Mainpage() {
  return (
    <div className='main_page'>
        <div className='main-content'>
          {DATA.map((data)=>(
            <div className='total-cont' key={data.id}>
                <div className='name-box'>
                  <img className='mainprofile-image' alt='' src={data.profile_image}/>
                    <div className='names'>
                            <div>
                              <p className='mainuser-name'>{data.name}</p><span className='time'>4h ago</span>
                            </div>
                            <div>
                            <p className='below-content'>Nee Kavithaigala. Original Audio</p>
                            </div>
                     </div>
                  <i className='doticon'><BiDotsVerticalRounded/></i>
                </div>

                <div className='maincontent-box'>
                   <img className='maincontent-image' src={data.content_image} alt=''/>
                </div>

                <div className='maincontent-buttons'>
                  <div className='four-icons'>
                     <i><AiOutlineHeart/></i>
                     <i><FaRegComment/></i>
                     <i><TbShare3/></i>
                     <i><MdSaveAlt/></i>
                  </div>

                  <div className='paragraph'>
                      <p><b>tom_cruise</b>Hi There This Is my instagram Website. Here i am using reactjs framework.And more npm packages.
                      And something about me i am akash and i am a fresher currently lookin for a job Software Developer</p>
                      <h6>#developer,#software,#instagram,#clone,#projects,#fresher,#india</h6>
                  </div>

                  <div className='border'>
                    
                  </div>

                </div>
            
            </div>
          ))}
        </div>
        
    </div>
  )
}
