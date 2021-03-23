import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
