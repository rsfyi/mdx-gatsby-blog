import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'

const Navbar = ({ toggle, toggleSidebar }) => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link className="nav-logo" to="/">
          <img src={logo} alt="mdx logo" />
        </Link>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <Links styleClass="nav-links" />
      <SocialLinks styleClass="nav-icons" />
    </div>
  </nav>
)

export default Navbar
