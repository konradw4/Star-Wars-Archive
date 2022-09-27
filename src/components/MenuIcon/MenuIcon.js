import React, { useEffect, useRef, useState } from 'react';

import './MenuIcon.scss';

const MenuIcon = ({ showMenu }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        open
            ? menuRef.current.classList.add('change')
            : menuRef.current.classList.remove('change');

        showMenu(open);
    }, [open]);

    return (
        <div
            ref={menuRef}
            className="menu-icon"
            onClick={() => setOpen((prevValue) => !prevValue)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default MenuIcon;
