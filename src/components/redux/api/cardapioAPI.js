import cardapioActions from '../actions/CardapioAction';
import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

let cardapioAPI = {
  buscarCardapio(idCardapio) {
    let acao = (response, dispatch) => {
      dispatch(cardapioActions.cardapioEncontrado(response.body));
      return response.body;
    };

    let url = `${configuracao.URL_CARDAPIO}/${idCardapio}`;
    return axiosRequests.get(getToken(), url, acao);
  },

  buscarCardapios() {
    let acao = (response, dispatch) => {
      dispatch(cardapioActions.cardapiosEncontrados(response.body));
      return response.body;
    };

    let url = `${configuracao.URL_CARDAPIO}`;
    return axiosRequests.get(getToken(), url, acao);
  },

  buscarProduto(idProduto) {
    let acao = (response, dispatch) => {
      dispatch(cardapioActions.produtoEncontrado(response.body));
      return response.body;
    };

    let url = `${configuracao.URL_PRODUTO}/${idProduto}`;
    return axiosRequests.get(getToken(), url, acao);
  },

  buscarCategoria(categoria) {
    let acao = (response, dispatch) => {
      dispatch(cardapioActions.categoriaEncontrada(response.body));
      return response.body;
    };

    let url = `${configuracao.URL_PRODUTO}/${categoria}`;
    return axiosRequests.get(getToken(), url, acao);
  },
};

function getToken() {
  return AsyncStorage.getItem('token');
}

export default cardapioAPI;
