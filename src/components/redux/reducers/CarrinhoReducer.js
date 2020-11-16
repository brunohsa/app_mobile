import actionTypes from '../actions/ActionTypes';

export default function carrinhoReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.CARRINHO_BUSCADO:
      return {
        ...state,
        carrinho: action.carrinho,
      };
    case actionTypes.PRODUTO_REMOVIDO:
      return {
        ...state,
        removerProduto: action.produto,
      };
    default:
      return state;
  }
}
