import actionTypes from './ActionTypes';

const cadastroActions = {
  fazerCadastro() {
    return {
      type: actionTypes.FAZER_CADASTRO,
    };
  },

  cadastroRealizado() {
    return {
      type: actionTypes.CADASTRO_REALIZADO,
    };
  },
};

export default cadastroActions;
