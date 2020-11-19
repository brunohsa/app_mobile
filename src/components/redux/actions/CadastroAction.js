import actionTypes from './ActionTypes';

const cadastroActions = {
  fazerCadastro() {
    return {
      type: actionTypes.FAZER_CADASTRO,
    };
  },

  cadastroRealizado() {
    return {
      type: actionTypes.CADASTRO_REALIZADO
    };
  },

  flagCadastroRealizado(cadastroRealizado) {
    return {
      type: actionTypes.CADASTRO_REALIZADO,
      cadastroRealizado: cadastroRealizado
    };
  },
};

export default cadastroActions;
