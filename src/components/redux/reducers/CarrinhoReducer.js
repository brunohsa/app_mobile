import actionTypes from '../actions/ActionTypes';

export function carrinhoReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.PEDIDOS_ENCONTRADOS:
      return {
        ...state,
        pedidos: action.pedidos,
      };
    case actionTypes.CARRINHO_ENCONTRADO:
      return {
        ...state,
        carrinho: action.carrinho,
      };
    case actionTypes.PRODUTO_ADICIONADO_NO_CARRINHO:
      return {
        ...state,
        carrinho: action.carrinho,
      };
    case actionTypes.PEDIDO_GERADO:
      return {
        ...state,
        pedidos: state.pedidos ? state.pedidos.push(action.pedido) : Array.of(action.pedido),
      };
    default:
      return state;
  }
}