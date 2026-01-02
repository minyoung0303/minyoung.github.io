import React from 'react';
import './Menu.css';

const Menu = ({ selectedPage, onSelectPage }) => {
    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About'},
        { id: 'projects', label:'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'certificate', label: 'Certificate' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className="menu">
            <div className="menu-logo">
                <span className="menu-logo-text">Portfolio</span>
            </div>
            <ul className="menu-list">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className={`menu-item ${
                            item.id === selectedPage ? 'active': ''
                        }`}
                        onClick={() => onSelectPage(item.id)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;