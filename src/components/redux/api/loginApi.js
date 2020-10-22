import loginActions from '../actions/LoginAction';
import axiosRequests from '../api/axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

const loginApi = {
  fazerLogin(email, senha) {
    let body = JSON.stringify({
      email: email,
      senha: senha,
    });

    let acao = (response, dispatch) => {
      AsyncStorage.setItem('token', response.headers.get('token'));
      dispatch(loginActions.loginRealizado());
      return response;
    };

    let url = `${configuracao.URL_LOGIN}`;
    return axiosRequests.postSemToken(body, url, acao);
  },
};

export default loginApi;
