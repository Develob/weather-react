import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { MemoApp } from './core/App';
import store from './redux/store';

import './index.css';

const app = (
    <Provider store={store}>
        <MemoApp />
    </Provider>
);

render(app, document.getElementById('root'));
