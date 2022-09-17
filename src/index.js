import React from 'react';
import ReactDOM from 'react-dom/client';

import Archive from './components/Archive/Archive';

import './index.scss';
import Logo from '../assets/star-wars-logo.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <header>
            <img src={Logo} />
        </header>
        <main>
            <Archive></Archive>
        </main>
        <footer></footer>
    </React.StrictMode>
);
