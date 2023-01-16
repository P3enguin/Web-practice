import React from 'react';
import Hello  from './hello.jsx'
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Hello />
    </React.StrictMode>
);