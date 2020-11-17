import carrinhoActions from '../actions/CarrinhoAction';
import loaderActions from '../actions/LoaderAction';

import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

import DataUtil from '../../util/DateUtils'

const CARRINHO_BASE_URL = 'v1/carrinhos'
const CONSUMIDORES_BASE_URL = 'v1/consumidores'

let carrinhoAPI = {

  buscarPedidos() {
    let hoje = new Date()
    let dataPassada = new Date();
    dataPassada.setDate(hoje.getDate() - 30);  

    let hojeString = DataUtil.getDataFormatada(hoje);
    let dataPassadaString = DataUtil.getDataFormatada(dataPassada)
    
    let acao = (response, dispatch) => {
      dispatch(carrinhoActions.pedidosEncontrados(response.body));
      dispatch(loaderActions.stopLoader());
      return response.body;
    };
    let url = `${configuracao.URL_CARRINHO}${CONSUMIDORES_BASE_URL}/pedidos?de=${dataPassadaString}&ate=${hojeString}`;  
    return axiosRequests.get(getToken(), url, acao)
  },

  buscarCarrinho() {
    let acao = (response, dispatch) => {
      dispatch(carrinhoActions.carrinhoEncontrado(response.body));
      dispatch(loaderActions.stopLoader());
      return response.body;
    };
    let url = `${configuracao.URL_CARRINHO}${CARRINHO_BASE_URL}/criar`;  
    return axiosRequests.post(getToken(), null, url, acao)
  },

  adicionarProdutoNoCarrinho(cardapioId, idProduto, quantidade, observacoes) { 
    let produtoCarrinho = JSON.stringify({
      quantidade: quantidade,
      observacoes: observacoes
    })
    let acao = (response, dispatch) => {
      dispatch(carrinhoActions.carrinhoEncontrado(response.body));
      dispatch(loaderActions.stopLoader());
      return response.body;
    };
    let url = `${configuracao.URL_CARRINHO}${CARRINHO_BASE_URL}/cardapio/${cardapioId}/produto/${idProduto}/adicionar`;
    return axiosRequests.put(getToken(), produtoCarrinho, url, acao)
  },

  gerarPedido(titular, numeroCartao, validade, codigoSeguranca) { 
    let dadosPagamento = JSON.stringify({
      nome_completo: titular,
      numero_cartao: numeroCartao,
      data_validade: validade,
      codigo_seguranca: codigoSeguranca,
      forma_pagamento: 'CREDITO'
    })
    //alert(JSON.stringify(dadosPagamento))
    let acao = (response, dispatch) => {
      dispatch(carrinhoActions.pedidoGerado(response.body));
      dispatch(loaderActions.stopLoader());
      return response.body;
    };
    let url = `${configuracao.URL_CARRINHO}${CONSUMIDORES_BASE_URL}/pedidos/gerar`;
    return axiosRequests.post(getToken(), dadosPagamento, url, acao)
  }
};

function getToken() {
  return AsyncStorage.getItem('token');
}

export default carrinhoAPI;
