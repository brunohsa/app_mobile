import {combineReducers} from 'redux';

const INITIAL_STATE = {
  email: '',
  senha: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
    default:
      return state;
  }
};

export default combineReducers({
  login: loginReducer,
});
