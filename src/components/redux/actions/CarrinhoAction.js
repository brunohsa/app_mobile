import actionTypes from './ActionTypes';

const carrinhoActions = {
  produtoAdicionado(produto) {
    return {
      type: actionTypes.PRODUTO_ADICIONADO,
      produto,
    };
  },

  produtoRemovido(produto) {
    return {
      type: actionTypes.PRODUTO_REMOVIDO,
      produto,
    };
  },
};

export default carrinhoActions;
