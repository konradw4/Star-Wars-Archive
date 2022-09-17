import React, { useContext, useState } from 'react';
import { CATEGORY } from '../consts/apiConst';

const MenuContext = React.createContext();
const MenuUpdateContext = React.createContext();

export const useMenu = () => useContext(MenuContext);
export const useMenuUpdate = () => useContext(MenuUpdateContext);

export const MenuProvider = ({ children }) => {
    const [menuElement, setMenuElement] = useState(CATEGORY.people);

    return (
        <MenuContext.Provider value={menuElement}>
            <MenuUpdateContext.Provider value={setMenuElement}>
                {children}
            </MenuUpdateContext.Provider>
        </MenuContext.Provider>
    );
};
