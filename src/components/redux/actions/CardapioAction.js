import actionTypes from './ActionTypes';

const cardapioActions = {
  cardapioEncontrado(cardapio) {
    return {
      type: actionTypes.CARDAPIO_ENCONTRADO,
      cardapio,
    };
  },

  cardapiosEncontrados(cardapio) {
    return {
      type: actionTypes.CARDAPIOS_ENCONTRADOS,
      cardapio,
    };
  },

  categoriaEncontrada(categoria) {
    return {
      type: actionTypes.CATEGORIA_ENCONTRADA,
      categoria,
    };
  },

  produtoEncontrado(produto) {
    return {
      type: actionTypes.PRODUTO_ENCONTRADO,
      produto
    };
  },

  melhoresProdutosDaRegiaoEncontrados(produtos) {
    return {
      type: actionTypes.MELHORES_PRODUTOS_REGIAO_ENCONTRADOS,
      produtos
    };
  },

  produtosDaRegiaoEncontrados(produtos) {
    return {
      type: actionTypes.PRODUTOS_REGIAO_ENCONTRADOS,
      produtos
    };
  },

  produtosFiltrados(produtos) {
    return {
      type: actionTypes.PRODUTOS_FILTRADOS,
      produtos
    };
  },
};

export default cardapioActions;
