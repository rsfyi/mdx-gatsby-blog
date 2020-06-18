import React from 'react'
import Links from '../constants/links'
import Categories from '../components/Categories'
import { IoMdClose } from 'react-icons/io'

const Sidebar = ({ showSidebar, closeSidebar }) => {
  return (
    <aside className={`sidebar ${showSidebar ? 'showSidebar' : ''}`}>
      <button className="close-btn" onClick={closeSidebar}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <Links styleClass="sidebar-links" />
      </div>
    </aside>
  )
}

export default Sidebar
