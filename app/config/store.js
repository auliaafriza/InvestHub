import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
// import {composeWithDevTools} from 'redux-devtools-extension';
import AppReducer from './rootReducer';

const middleware = applyMiddleware(thunk, promise);

export default createStore(AppReducer, middleware);
