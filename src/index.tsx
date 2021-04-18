import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './core/App';
import store from './redux/store';

import './index.css';

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

render(app, document.getElementById('root'));
