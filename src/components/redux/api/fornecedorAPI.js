import fornecedorActions from '../actions/FornecedorAction';
import loaderActions from '../actions/LoaderAction';

import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

const LOCALIZACAO_FORNECEDORES_BASE_URL = 'v1/fornecedores'

let foenecedorAPI = {

  buscarFornecedores(lat, long) {
    let acao = (response, dispatch) => {
      dispatch(fornecedorActions.fornecedoresEncontrados(response.body));
      dispatch(loaderActions.stopLoader());
      return response.body;
    };
    let url = `${configuracao.URL_LOCALIZACAO}${LOCALIZACAO_FORNECEDORES_BASE_URL}/latitude/${lat}/longitude/${long}`;  
    return axiosRequests.get(getToken(), url, acao)
  },

  buscarFornecedoresPorNome(lat, long, nome) {
    let acao = (response, dispatch) => {
      dispatch(fornecedorActions.fornecedoresFiltrados(response.body));
      return response.body;
    };
    let url = `${configuracao.URL_LOCALIZACAO}${LOCALIZACAO_FORNECEDORES_BASE_URL}/latitude/${lat}/longitude/${long}?nome=${nome}`;  
    return axiosRequests.get(getToken(), url, acao)
  },

  buscarFornecedoresPorCategoria(lat, long, categoria, tituloCategoria) {
    let acao = (response, dispatch) => {
      dispatch(fornecedorActions.fornecedoresPorCategoria(response.body, categoria, tituloCategoria));
      dispatch(loaderActions.stopLoader());
      return response.body;
    };
    let url = `${configuracao.URL_LOCALIZACAO}${LOCALIZACAO_FORNECEDORES_BASE_URL}/latitude/${lat}/longitude/${long}?categoria=${categoria}`;  
    return axiosRequests.get(getToken(), url, acao)
  }
};

function getToken() {
  return AsyncStorage.getItem('token');
}

export default foenecedorAPI;
