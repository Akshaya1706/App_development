import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import { BsPersonCircle } from 'react-icons/bs'; // Import the profile icon

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='menu-bars' onClick={toggleSidebar}>
            <FaIcons.FaBars />
          </div>
          <div className='profile-icon'>
            <BsPersonCircle />
          </div>
          <div>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path} onClick={toggleSidebar}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
