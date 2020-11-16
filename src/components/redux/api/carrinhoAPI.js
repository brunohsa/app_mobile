import carrinhoActions from '../actions/CarrinhoAction';
import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

let carrinhoAPI = {
  
  criarCarrinho() {
    let acao = (response, dispatch) => {
      dispatch(carrinhoActions.carrinhoBuscado(response.body));
      return response.body;
    };

    let url = `${configuracao.URL_CARRINHO}/v1/carrinhos/criar`;
    return axiosRequests.post(getToken(), url, acao);
  },
};

function getToken() {
  return AsyncStorage.getItem('token');
}
export default carrinhoAPI;
