import React from 'react';
import { FaBars, FaHome, FaImages, FaInfoCircle, FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isMinimized, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isMinimized ? 'minimized' : 'expanded'}`}>
            <div className="toggle-menu">
                {!isMinimized && <span className="menu-text">Menu</span>}
                <button className="toggle-sidebar" onClick={toggleSidebar}>
                    <FaBars />
                </button>
            </div>
            <ul>
                <li>
                    <Link to="/">
                        <FaHome />
                        {!isMinimized && <span> Home</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                        <FaList />
                        {!isMinimized && <span> Dashboard</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/gallery">
                        <FaImages />
                        {!isMinimized && <span> Gallery</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <FaInfoCircle />
                        {!isMinimized && <span> About</span>}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
