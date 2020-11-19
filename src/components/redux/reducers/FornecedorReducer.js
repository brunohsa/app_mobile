import actionTypes from '../actions/ActionTypes';

export function fornecedorReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.FORNECEDORES_ENCONTRADOS:
      return {
        ...state,
        fornecedores: action.fornecedores
      };
    case actionTypes.FORNECEDORES_FILTRADOS:
      return {
        ...state,
        fornecedoresFiltrados: action.fornecedores
      };
    case actionTypes.FORNECEDORES_POR_CATEGORIA_FILTRADOS:
      return {
        ...state,
        fornecedoresPorCategoria: action.fornecedoresPorCategoria
      };
    default:
      return state;
  }
}