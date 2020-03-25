import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { messageReducer } from './reducers/messageReducer';

const store = createStore(messageReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  rootElement
);
