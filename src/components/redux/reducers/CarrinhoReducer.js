import { act } from 'react-test-renderer';
import actionTypes from '../actions/ActionTypes';

export function carrinhoReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.PEDIDOS_ENCONTRADOS:
      return {
        ...state,
        pedidos: action.pedidos,
      };
    case actionTypes.CARRINHO_ENCONTRADO:
      return {
        ...state,
        carrinho: action.carrinho,
      };
    case actionTypes.PRODUTO_ADICIONADO_NO_CARRINHO:
      return {
        ...state,
        carrinho: action.carrinho,
        produtoAdicionado: true
      };
    case actionTypes.PEDIDO_GERADO:
      return {
        ...state,
        carrinho: null,
        pedidoGerado: true
      };
    case actionTypes.FLAG_PRODUTO_ADICIONADO_NO_CARRINHO:
      return {
        ...state,
        produtoAdicionado: action.adicionado
      };
    case actionTypes.FLAG_PEDIDO_GERADO:
      return {
        ...state,
        pedidoGerado: action.pedidoGerado
      };
    case actionTypes.PRODUTO_REMOVIDO_DO_CARRINHO:
      return {
        ...state,
        carrinho: action.carrinho,
      };
    default:
      return state;
  }
}