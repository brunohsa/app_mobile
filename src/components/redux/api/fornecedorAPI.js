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
  }
};

function getToken() {
  return AsyncStorage.getItem('token');
}

export default foenecedorAPI;