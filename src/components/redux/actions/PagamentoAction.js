import actionTypes from './ActionTypes';

const pagamentoActions = {
  pagamentoEfetuado() {
    return {
      type: actionTypes.PAGAMENTO_EFETUADO,
    };
  },
};

export default pagamentoActions;
