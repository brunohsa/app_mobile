import actionTypes from '../actions/ActionTypes';

export default function cadastroReducers(state = {}, action) {
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
    default:
      return state;
  }
}
