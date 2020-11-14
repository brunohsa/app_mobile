import actionTypes from '../actions/ActionTypes';

export default function cardapioReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.CARDAPIOS_ENCONTRADOS:
      return {
        ...state,
        cardapios: action.cardapios,
      };
    case actionTypes.CARDAPIO_ENCONTRADO:
      return {
        ...state,
        cardapios: action.cardapios,
      };
    case actionTypes.PRODUTO_ENCONTRADO:
      return {
        ...state,
        produto: action.produto,
      };
    case actionTypes.CATEGORIA_ENCONTRADA:
      return {
        ...state,
        cardapios: action.cardapios,
      };
    default:
      return state;
  }
}
