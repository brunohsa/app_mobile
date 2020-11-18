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

  adicionarProdutoNoCarrinho(carrinho) { 
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
  },

  produtoAdicionado(adicionado) { 
    return {
      type: actionTypes.FLAG_PRODUTO_ADICIONADO_NO_CARRINHO,
      adicionado
    };
  },

  flagPedidoGerado(pedidoGerado) { 
    return {
      type: actionTypes.FLAG_PEDIDO_GERADO,
      pedidoGerado
    };
  }
};

export default carrinhoActions;
