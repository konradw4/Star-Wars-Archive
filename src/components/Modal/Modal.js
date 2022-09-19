import React from 'react';
import { useModalData, useModalOpen } from '../../context/ModalContext';

import './Modal.scss';

function Modal() {
    const closeModal = useModalOpen();
    const data = useModalData();

    const excludedItems = ['name', 'url', 'films', 'homeworld', 'species', 'vehicles', 'starships', 'residents', 'pilots'];
    const dataFilter = ([key]) => !excludedItems.includes(key);

    return (
        <div className="modal">
            <div className="title">
                <h2>{data.name}</h2>
            </div>
            <div className="body">
                {Object.entries(data).filter(dataFilter).map(([key, value]) => <p key={key}><span>{`${key}: `}</span><span>{`${value}`}</span></p>)}
            </div>
            <div className="footer">
                <button onClick={() => closeModal(false)}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
