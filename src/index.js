import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <header>Star Wars Archive</header>
        <main>
            <React.StrictMode>
                <App></App>
            </React.StrictMode>
        </main>
        <footer></footer>
    </>
);