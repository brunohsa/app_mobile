import actionTypes from '../actions/ActionTypes';

export function cardapioReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.CARDAPIO_ENCONTRADO:
      return {
        ...state,
        cardapio: action.cardapio,
      };
    case actionTypes.PRODUTO_ENCONTRADO:
      return {
        ...state,
        produto: action.produto,
      };
    case actionTypes.MELHORES_PRODUTOS_REGIAO_ENCONTRADOS:
      return {
        ...state,
        melhoresDaRegiao: action.produtos,
      };
    case actionTypes.PRODUTOS_REGIAO_ENCONTRADOS:
      return {
        ...state,
        produtosRegiao: action.produtos,
      };
    default:
      return state;
  }
}