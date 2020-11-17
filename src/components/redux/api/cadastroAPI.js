import cadastroActions from '../actions/CadastroAction';
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
    alert(JSON.stringify(body))
    let acao = (response, dispatch) => {
      AsyncStorage.setItem('token', response.headers.get('token'));
      dispatch(cadastroActions.cadastroRealizado());
      return response;
    };

    let url = `${configuracao.URL_LOGIN}v1/usuarios/cadastrar/cliente`;
    return axiosRequests.postSemToken(body, url, acao);
  },

};

export default cadastroAPI;
