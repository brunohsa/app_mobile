import actionTypes from '../actions/ActionTypes';

export function carrinhoReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.PEDIDOS_ENCONTRADOS:
      return {
        ...state,
        pedidos: action.pedidos,
      }; 
    default:
      return state;
  }
}