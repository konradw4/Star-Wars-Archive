import React, { useEffect, useRef } from 'react';
import {
    useModal,
    useModalData,
    useModalOpen,
} from '../../context/ModalContext';
import { excludedItems } from './ModalExcludedItems';

import './Modal.scss';

function Modal() {
    const modalRef = useRef();
    const closeModal = useModalOpen();
    const isModalOpen = useModal();
    const data = useModalData();

    const dataFilter = ([key]) => !excludedItems.includes(key);

    const checkIfClickedOutside = (event) => {
        if (isModalOpen && modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', checkIfClickedOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [isModalOpen]);

    return (
        <div className="modal" ref={modalRef}>
            <div className="title">
                <h2>{data.name}</h2>
            </div>
            <div className="body">
                {Object.entries(data)
                    .filter(dataFilter)
                    .map(([key, value]) => (
                        <p key={key}>
                            <span>{`${key}: `}</span>
                            <span>{`${value}`}</span>
                        </p>
                    ))}
            </div>
        </div>
    );
}

export default Modal;
