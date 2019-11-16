import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducer from '../reducers/userReducer';
const reducers = {
  form: formReducer,
  userReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
