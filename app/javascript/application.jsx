// // Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore } from './src/redux/configureStore';
import { Container } from './src/Components/Container';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Container />
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'))
})


