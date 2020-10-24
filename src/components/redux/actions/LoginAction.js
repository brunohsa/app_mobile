import actionTypes from './ActionTypes';

const loginActions = {
  fazerLogin() {
    return {
      type: actionTypes.FAZER_LOGIN,
    };
  },

  loginRealizado() {
    return {
      type: actionTypes.LOGIN_REALIZADO,
    };
  },

  fazerLogout() {
    return {
      type: actionTypes.FAZER_LOGOUT,
    };
  },

  logoutRealizado() {
    return {
      type: actionTypes.LOGOUT_REALIZADO,
    };
  },
};

export default loginActions;
