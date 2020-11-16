import actionTypes from './ActionTypes';

const carrinhoActions = {

  carrinhoBuscado(carrinho) {
    return {
      type: actionTypes.PRODUTO_ADICIONADO,
      carrinho: carrinho,
    }
  },

};

export default carrinhoActions;
