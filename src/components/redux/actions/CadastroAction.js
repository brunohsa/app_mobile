import actionTypes from './ActionTypes';

const cadastroActions = {
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

  cadastroEncontrado(cadastro) {
    return {
      type: actionTypes.CADASTRO_ENCONTRADO,
      cadastroEncontrado: cadastro
    };
  }
};

export default cadastroActions;
