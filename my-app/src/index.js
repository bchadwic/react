import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
