import pagamentoAction from '../actions/PagamentoAction';
import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

let pagamentoAPI = {
  efetuarPagamento() {
    let acao = (response, dispatch) => {
      dispatch(pagamentoAction.pagamentoEfetuado());
      return response;
    };

    let url = `${configuracao.URL_PAGAMENTO}`;
    return axiosRequests.get(getToken(), url, acao);
  },
};

function getToken() {
  return AsyncStorage.getItem('token');
}
export default pagamentoAPI;
