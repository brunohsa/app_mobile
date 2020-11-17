import actionTypes from './ActionTypes';

const cadastroActions = {

  fornecedoresEncontrados(fornecedores) {
    return {
      type: actionTypes.FORNECEDORES_ENCONTRADOS,
      fornecedores
    };
  },
  
};

export default cadastroActions;
