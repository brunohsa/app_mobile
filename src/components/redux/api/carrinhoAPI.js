import carrinhoActions from '../actions/CarrinhoAction';
import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

let carrinhoAPI = {
  adicionarProduto(idProduto) {
    let acao = (response, dispatch) => {
      dispatch(carrinhoActions.produtoAdicionado(response.body));
      return response.body;
    };

    let url = `${configuracao.URL_CARRINHO}/${idProduto}`;
    return axiosRequests.get(getToken(), url, acao);
  },

  removerProduto(idProduto) {
    let acao = (response, dispatch) => {
      dispatch(carrinhoActions.produtoRemovido(response.body));
      return response.body;
    };

    let url = `${configuracao.URL_CARRINHO}/${idProduto}`;
    return axiosRequests.get(getToken(), url, acao);
  },
};

function getToken() {
  return AsyncStorage.getItem('token');
}
export default carrinhoAPI;
