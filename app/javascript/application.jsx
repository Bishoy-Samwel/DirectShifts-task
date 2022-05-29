// // Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { Container } from './components/Container';
import { configureStore } from './components/redux/configureStore';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Container store={store} />
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'))
})


