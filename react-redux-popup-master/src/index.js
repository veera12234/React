import React from 'react'
//import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import logger from 'redux-logger'


const store = window.opener == null ? createStore(reducer, applyMiddleware(logger)) : window.opener.store;
window.store = store;

function defaultPage() {
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root'));
};

defaultPage();

window.addEventListener("beforeunload", function (e) {
  ReactDOM.render(<h1>Unsubscribe store Listener</h1>, document.getElementById("root"));
});