import React from 'react';
import './Navpage.css';
import profile from './profile.jpg';
import insta from './insta.png';
import {AiFillHome} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {MdExplore} from 'react-icons/md';
import {BiMessageRounded} from 'react-icons/bi';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlinePlusSquare} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import {MdOutlineOndemandVideo} from 'react-icons/md';

export default function Navpage() {
  return (
    <div className='nav'>
        <img src={insta} className='insta' alt=''/>
        

        <ul>
            <li className='lists'><span><AiFillHome size={26}/></span>Home</li>
            <li className='lists'><span><BiSearch size={26}/></span>Search</li>
            <li className='lists'><span><MdExplore size={26}/></span>Explore</li>
            <li className='lists'><span><MdOutlineOndemandVideo size={26}/></span>Reel</li>
            <li className='lists'><span><AiOutlineHeart size={26}/></span>Notification</li>
            <li className='lists'><span><BiMessageRounded size={26}/></span>Message</li>
            <li className='lists'><span><AiOutlinePlusSquare /></span>Create</li>
            <li className='lists'><span><img src={profile} className='profile'></img></span>Profile</li>
            <li className='lists'><span><AiOutlineMenu/></span>More</li>
        </ul>

    </div>
  )
}
