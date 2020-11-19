import actionTypes from '../actions/ActionTypes';

export function cadastroReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.FAZER_CADASTRO:
      return {
        ...state,
        fazerCadastro: action.fazerCadastro,
      };
    case actionTypes.CADASTRO_REALIZADO:
      return {
        ...state,
        cadastroRealizado: true,
      };
    case actionTypes.FLAG_CADASTRO_REALIZADO:
      return {
        ...state,
        cadastroRealizado: action.cadastroRealizado,
      };
    case actionTypes.CADASTRO_ENCONTRADO:
      return {
        ...state,
        cadastro: action.cadastroEncontrado,
      };
    default:
      return state;
  }
}