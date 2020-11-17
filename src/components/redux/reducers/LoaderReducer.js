import actionTypes from '../actions/ActionTypes';

export function loaderReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}