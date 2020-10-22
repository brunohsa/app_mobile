import actionTypes from './ActionTypes';

const pedidoActions = {
  pedidoEfetuado() {
    return {
      type: actionTypes.PEDIDO_EFETUADO,
    };
  },

  pedidos() {
    return {
      type: actionTypes.PEDIDOS,
    };
  },
};

export default pedidoActions;
