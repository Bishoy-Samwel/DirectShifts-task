// // Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

const App = () => {
  return (
    <div><Button variant="contained">Hello World</Button></div>
    
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'))
})


