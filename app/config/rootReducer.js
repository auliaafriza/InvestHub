import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import userReducer from '../reducers/userReducer';
import umkmReducer from '../reducers/umkmReducer';
const reducers = {
  // form: formReducer,
  userReducer,
  umkmReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
