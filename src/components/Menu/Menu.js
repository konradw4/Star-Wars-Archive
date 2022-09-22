import React from 'react';
import { CATEGORY } from '../../consts/apiConst';
import { useMenuUpdate } from '../../context/MenuContext';
import MenuIcon from '../MenuIcon/MenuIcon';

import './Menu.scss';

const Menu = () => {
    const selectMenuItem = useMenuUpdate();

    return (
        <nav className='menu'>
            <MenuIcon />
            <ul>
                {Object.keys(CATEGORY).map((key, index) => (
                    <li key={index} onClick={() => selectMenuItem(key)}>{key}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
