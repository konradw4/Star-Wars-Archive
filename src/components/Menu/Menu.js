import React, { useState } from 'react';
import { CATEGORY } from '../../consts/apiConst';
import { useMenuUpdate } from '../../context/MenuContext';
import MenuIcon from '../MenuIcon/MenuIcon';

import './Menu.scss';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const selectMenuItem = useMenuUpdate();

    return (
        <nav className={`menu ${showMenu ? 'open' : ''}`}>
            <MenuIcon showMenu={(value) => setShowMenu(value)} />
            <ul>
                {Object.keys(CATEGORY).map((key, index) => (
                    <li key={index} onClick={() => selectMenuItem(key)}>
                        {key}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
