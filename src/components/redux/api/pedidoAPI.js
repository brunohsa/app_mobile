import pedidoAction from '../actions/pedidoAction';
import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

let pedidoAPI = {
  efetuarPedido(){
    let acao = (response, dispatch) => {
      dispatch(pedidoAction.pedidoEfetuado(response.body));
      return response.body;
    };

    let url = `${configuracao.URL_PEDIDO}`;
    return axiosRequests.get(getToken(), url, acao);
  },

  carregarPedidos(){
    let acao = (response, dispatch) => {
      dispatch(pedidoAction.pedidos());
      return response.body;
    };

    let url = `${configuracao.URL_PEDIDO}`;
    return axiosRequests.get(getToken(), url, acao);
  },

}

function getToken() {
  return AsyncStorage.getItem('token');
}

export default pedidoAPI;