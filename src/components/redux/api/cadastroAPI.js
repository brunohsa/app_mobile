import cadastroActions from '../actions/CadastroAction';
import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

let cadastroAPI = {
  fazerCadastro(email, nome, senha) {
    let body = JSON.stringify({
      email: email,
      nome: nome,
      senha: senha,
    });

    let acao = (response, dispatch) => {
      AsyncStorage.setItem('token', response.headers.get('token'));
      dispatch(cadastroActions.cadastroRealizado());
      return response;
    };

    let url = `${configuracao.URL_LOGIN}`;
    return axiosRequests.postSemToken(body, url, acao);
  },
};

export default cadastroAPI;
