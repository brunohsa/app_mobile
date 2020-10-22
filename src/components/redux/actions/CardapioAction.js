import actionTypes from './ActionTypes';

const cardapioActions = {
  cardapioEncontrado() {
    return {
      type: actionTypes.CARDAPIO_ENCONTRADO,
    };
  },

  cardapiosEncontrados() {
    return {
      type: actionTypes.CARDAPIOS_ENCONTRADO,
    };
  },

  categoriaEncontrada() {
    return {
      type: actionTypes.CATEGORIA_ENCONTRADA,
    };
  },

  produtoEncontrado() {
    return {
      type: actionTypes.PRODUTO_ENCONTRADO,
    };
  },
};

export default cardapioActions;
