import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    {/*TODO: create a store object to be passed to provider*/}
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
