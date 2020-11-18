import actionTypes from './ActionTypes';

const cadastroActions = {

  fornecedoresEncontrados(fornecedores) {
    return {
      type: actionTypes.FORNECEDORES_ENCONTRADOS,
      fornecedores
    };
  },
  
  fornecedoresFiltrados(fornecedores) {
    return {
      type: actionTypes.FORNECEDORES_FILTRADOS,
      fornecedores
    };
  },
  
};

export default cadastroActions;
