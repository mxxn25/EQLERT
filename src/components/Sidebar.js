import React from 'react';
import { FaHome, FaImages, FaInfoCircle, FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import CSS file for Sidebar

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li>
                    <Link to="/"><FaHome /> Home</Link>
                </li>
                <li>
                    <Link to="/dashboard"><FaList /> Dashboard</Link>
                </li>
                <li>
                    <Link to="/gallery"><FaImages /> Gallery</Link>
                </li>
                <li>
                    <Link to="/about"><FaInfoCircle /> About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
