import actionTypes from '../actions/ActionTypes';

export default function carrinhoReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.PRODUTO_ADICIONADO:
      return {
        ...state,
        adicionarProduto: action.produto,
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
