import React from 'react';
import { useModalDataUpdate, useModalOpen } from '../../context/ModalContext';

import './ListItem.scss';

const ListItem = ({ item }) => {
    const openModal = useModalOpen();
    const dataModal = useModalDataUpdate();

    const open = () => {
        openModal(true);
        dataModal(item);
    };

    return <li className='ListItem' onClick={() => open()}>{item.name}</li>;
};

export default ListItem;
