import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import userReducer from '../reducers/userReducer';
import umkmReducer from '../reducers/umkmReducer';
import investReducer from '../reducers/investReducer';
const reducers = {
  // form: formReducer,
  userReducer,
  umkmReducer,
  investReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
