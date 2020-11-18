import cardapioActions from '../actions/CardapioAction';
import loaderActions from '../actions/LoaderAction';

import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

let URL_PRODUTOS_BASE = 'v1/produtos'
let URL_CARDAPIOS_BASE = 'v1/cardapios'

let cardapioAPI = {
  buscarCardapio(fornecedorUUID) {
    let acao = (response, dispatch) => {
      dispatch(cardapioActions.cardapioEncontrado(response.body));
      dispatch(loaderActions.stopLoader());
      return response.body;
    };

    let url = `${configuracao.URL_CARDAPIO}${URL_CARDAPIOS_BASE}/cadastro/${fornecedorUUID}`;
    return axiosRequests.get(getToken(), url, acao);
  },

  buscarProduto(idProduto) {
    let acao = (response, dispatch) => {
      dispatch(cardapioActions.produtoEncontrado(response.body));
      dispatch(loaderActions.stopLoader());
      return response.body;
    };

    let url = `${configuracao.URL_CARDAPIO}${URL_PRODUTOS_BASE}/${idProduto}`;
    return axiosRequests.get(getToken(), url, acao);
  },

  buscarMelhoresAvaliadosDaRegiao(latitude, longitude) {
    let acao = (response, dispatch) => {
      dispatch(cardapioActions.melhoresProdutosDaRegiaoEncontrados(response.body));
      dispatch(loaderActions.stopLoader());
      return response.body;
    };

    let url = `${configuracao.URL_CARDAPIO}${URL_PRODUTOS_BASE}/latitude/${latitude}/longitude/${longitude}?campo_ordenacao=nota&limite=10&tipo_ordenacao=desc`;
    return axiosRequests.get(getToken(), url, acao);
  },

  buscarProdutosDaRegiao(latitude, longitude) {
    let acao = (response, dispatch) => {
      dispatch(cardapioActions.produtosDaRegiaoEncontrados(response.body));
      dispatch(loaderActions.stopLoader());
      return response.body;
    };

    let url = `${configuracao.URL_CARDAPIO}${URL_PRODUTOS_BASE}/latitude/${latitude}/longitude/${longitude}?campo_ordenacao=nota&limite=150`;
    return axiosRequests.get(getToken(), url, acao);
  }
};

function getToken() {
  return AsyncStorage.getItem('token');
}

export default cardapioAPI;
