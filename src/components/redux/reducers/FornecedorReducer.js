import actionTypes from '../actions/ActionTypes';

export function fornecedorReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.FORNECEDORES_ENCONTRADOS:
      return {
        ...state,
        fornecedores: action.fornecedores
      };
    default:
      return state;
  }
}