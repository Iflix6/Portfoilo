import React from 'react'
import {logo} from '../assets/index'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
     <div className="w-[1280px] border-b-[1px] h-[142px] bg-blue-500 flex flex-row">
      <div>
          <img className='w-[28px]' src={logo} alt='logo'  />
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>  
      </div>
     </div>
  )
}

export default Navbar