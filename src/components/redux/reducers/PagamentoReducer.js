import actionTypes from '../actions/ActionTypes';

export default function pagamentoReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.PAGAMENTO_EFETUADO:
      return {
        ...state,
        pagamentoEfetuado: true,
      };
    default:
      return state;
  }
}
