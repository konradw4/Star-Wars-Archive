import React, { useState } from 'react';

import List from '../List/List';
import Menu from '../Menu/Menu';
import MenuProvider from '../../context/MenuContext';
import Modal from '../Modal/Modal';
import { useModal } from '../../context/ModalContext';

function Archive() {
    const modalIsOpen = useModal();

    return (
        <MenuProvider>
                <Menu></Menu>
                <List></List>
                {modalIsOpen && <Modal />}
        </MenuProvider>
    );
}

export default Archive;
