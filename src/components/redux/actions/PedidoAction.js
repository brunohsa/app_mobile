import actionTypes from './ActionTypes';

const pedidoActions = {
  pedidoEfetuado(produtos) {
    return {
      type: actionTypes.PEDIDO_EFETUADO,
      produtos
    };
  },

  pedidos() {
    return {
      type: actionTypes.PEDIDOS,
    };
  },
};

export default pedidoActions;
