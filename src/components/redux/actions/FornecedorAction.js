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

  fornecedoresPorCategoria(fornecedores, categoria, tituloCategoria) {
    return {
      type: actionTypes.FORNECEDORES_POR_CATEGORIA_FILTRADOS,
      fornecedoresPorCategoria: { 
        categoria:{
          id: categoria,
          titulo: tituloCategoria,
          fornecedores: fornecedores
        }
      }
    };
  },
  
  limparFornecedoresPorCategoria() {
    return {
      type: actionTypes.FORNECEDORES_POR_CATEGORIA_FILTRADOS,
      fornecedoresPorCategoria: null
    };
  }
};

export default cadastroActions;
