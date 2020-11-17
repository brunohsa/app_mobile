import actionTypes from './ActionTypes';

const carrinhoActions = {

  pedidosEncontrados(pedidos) {
    return {
      type: actionTypes.PEDIDOS_ENCONTRADOS,
      pedidos
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
