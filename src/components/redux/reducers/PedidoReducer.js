import actionTypes from '../actions/ActionTypes';

export default function pedidoReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.PEDIDO_EFETUADO:
      return {
        ...state,
        pedidoEfetuado: true,
      };
    case actionTypes.PEDIDOS:
      return {
        ...state,
        pedidos: action.pedidos,
      };
    default:
      return state;
  }
  
}