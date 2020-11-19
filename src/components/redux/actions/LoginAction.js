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

  flagLoginRealizado(loginRealizado) {
    return {
      type: actionTypes.FLAG_LOGIN_REALIZADO,
      loginRealizado: loginRealizado
    };
  },
};

export default loginActions;
