import React from 'react';

import './Menu.scss';

const Menu = (props) => {
    return (
        <nav className='menu'>
            <ul>
                {props.menu.map((menuItem) => (
                    <li key={menuItem}>{menuItem}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
