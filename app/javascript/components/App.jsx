/* eslint-disable no-unused-expressions */
import ReactDOM from 'react-dom';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { Container } from './Container';
import { configureStore } from './redux/configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container store={store} />
      </Router>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
