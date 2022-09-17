import React from 'react';

import List from '../List/List';
import Menu from '../Menu/Menu';
import { MenuProvider } from '../../context/MenuContext';

function Archive() {
    return (
        <MenuProvider>
            <Menu></Menu>
            <List></List>
        </MenuProvider>
    );
}

export default Archive;
