import React, { useContext, useState } from 'react';

const ModalContext = React.createContext();
const ModalOpenContext = React.createContext();
const ModalDataContext = React.createContext();
const ModalDataUpdateContext = React.createContext();

export const useModal = () => useContext(ModalContext);
export const useModalOpen = () => useContext(ModalOpenContext);
export const useModalData = () => useContext(ModalDataContext);
export const useModalDataUpdate = () => useContext(ModalDataUpdateContext);

const ModalProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState();

    return (
        <ModalContext.Provider value={openModal}>
            <ModalOpenContext.Provider value={setOpenModal}>
                <ModalDataContext.Provider value={data}>
                    <ModalDataUpdateContext.Provider value={setData}>
                        {children}
                    </ModalDataUpdateContext.Provider>
                </ModalDataContext.Provider>
            </ModalOpenContext.Provider>
        </ModalContext.Provider>
    );
};

export default ModalProvider;
