import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
=======
>>>>>>> Add React router for 'Your Profile'
import './index.css';
import store from './redux/store';
import App from './App';


<<<<<<< HEAD
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
=======
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
>>>>>>> Add React router for 'Your Profile'
