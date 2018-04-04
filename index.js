import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.scss';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app'));