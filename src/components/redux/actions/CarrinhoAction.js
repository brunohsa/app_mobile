import actionTypes from './ActionTypes';

const carrinhoActions = {

  pedidosEncontrados(pedidos) {
    return {
      type: actionTypes.PEDIDOS_ENCONTRADOS,
      pedidos
    };
  },

  carrinhoEncontrado(carrinho) {
    return {
      type: actionTypes.CARRINHO_ENCONTRADO,
      carrinho
    };
  },

  adicionarProdutoNoCarrinho() { 
    return {
      type: actionTypes.PRODUTO_ADICIONADO_NO_CARRINHO,
      carrinho
    };
  },

  pedidoGerado(pedido) { 
    return {
      type: actionTypes.PEDIDO_GERADO,
      pedido
    };
  }
};

export default carrinhoActions;
