import React from 'react';
import { FaBars, FaHome, FaImages, FaInfoCircle, FaList, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Sidebar.css';

const Sidebar = ({ isMinimized, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isMinimized ? 'minimized' : 'expanded'}`}>
            <div className="toggle-menu">
                {!isMinimized && (
                    <img src={logo} alt="Logo" className="logo" />
                )}
                <button className="toggle-sidebar" onClick={toggleSidebar}>
                    {isMinimized ? <FaBars /> : <FaTimes />}
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
