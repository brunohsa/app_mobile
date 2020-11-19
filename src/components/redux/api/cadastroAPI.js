import cadastroActions from '../actions/CadastroAction';
import loaderActions from '../actions/LoaderAction';

import axiosRequests from './axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

const urlBaseCadastro = "v1/cadastros"
const urlBasePessoaFisica = "v1/pessoa-fisica"

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

  buscarCadastro() {
    let acao = (response, dispatch) => {
      dispatch(cadastroActions.cadastroEncontrado(response.body));
      dispatch(loaderActions.stopLoader());
      return response;
    };

    let url = `${configuracao.URL_CADASTRO}${urlBaseCadastro}`;
    return axiosRequests.get(getToken(), url, acao);
  },

  atualizarCadastro(sobrenome, telefone, cpf) {
    let acao = (response, dispatch) => {
      dispatch(loaderActions.stopLoader());
      return response;
    };
    let body = JSON.stringify({
      sobrenome: sobrenome ,
      telefone: telefone,
      cpf: cpf
    })
    let url = `${configuracao.URL_CADASTRO}${urlBasePessoaFisica}/alterar`;
    return axiosRequests.put(getToken(), body, url, acao);
  }
};

function getToken() {
  return AsyncStorage.getItem('token');
}


export default cadastroAPI;
