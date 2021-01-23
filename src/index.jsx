import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "mobx-react";

import './index.css';
import 'react-chat-elements/dist/main.css';

import App from './App';
import MessagesStore from './Store/MessagesStore.js';

const stores = {
  MessagesStore,
};

ReactDOM.render((
  <Provider {...stores}>
    <App />
  </Provider>
  ),
  document.getElementById('root')
);
