import actionTypes from './ActionTypes';

const loaderActions = {

  startLoader() {
    return {
      type: actionTypes.LOADING,
      loading: true
    };
  },

  stopLoader() {
    return {
      type: actionTypes.LOADING,
      loading: false
    };
  },
  
};

export default loaderActions;
