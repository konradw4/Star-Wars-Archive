import React from 'react';
import ReactDOM from 'react-dom/client';

import Archive from './components/Archive/Archive';

import './index.scss';
import Logo from '../assets/star-wars-logo.png';
import ModalProvider from './context/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <header>
            <img src={Logo} />
        </header>
        <main>
            <ModalProvider>
                <Archive></Archive>
            </ModalProvider>
        </main>
        <footer></footer>
    </React.StrictMode>
);
