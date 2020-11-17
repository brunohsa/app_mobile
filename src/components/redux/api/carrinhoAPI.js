import carrinhoActions from '../actions/CarrinhoAction';
import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

import DataUtil from '../../util/DateUtils'

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
      return response.body;
    };
    let url = `${configuracao.URL_CARRINHO}${CONSUMIDORES_BASE_URL}/pedidos?de=${dataPassadaString}&ate=${hojeString}`;  
    return axiosRequests.get(getToken(), url, acao)
  },
};

function getToken() {
  return AsyncStorage.getItem('token');
}

export default carrinhoAPI;
