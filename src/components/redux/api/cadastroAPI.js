import cadastroActions from '../actions/CadastroAction';
import loaderActions from '../actions/LoaderAction';

import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

let cadastroAPI = {

  fazerCadastro(nome, email, senha) {
    let body = JSON.stringify({
      nome: nome,
      email: email,
      senha: senha,
    });
    let acao = (response, dispatch) => {
      AsyncStorage.setItem('token', response.headers.get('token'));
      dispatch(cadastroActions.cadastroRealizado());
      dispatch(loaderActions.stopLoader());
      return response;
    };

    let url = `${configuracao.URL_LOGIN}v1/usuarios/cadastrar/cliente`;
    return axiosRequests.postSemToken(body, url, acao);
  },

};

export default cadastroAPI;
