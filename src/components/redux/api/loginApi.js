import loginActions from '../actions/LoginAction';
import axiosRequests from '../api/axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

const loginApi = {

  fazerLogin(email, senha) {
    let body = JSON.stringify({
      email: 'bharaujo@hotmail.com',
      senha: '123Mudar@',
    });
    let acao = (response, dispatch) => {
      AsyncStorage.setItem('token', response.headers.get('token'));
      dispatch(loginActions.loginRealizado());
      return response;
    };

    let url = `${configuracao.URL_LOGIN}v1/autenticar`;
    return axiosRequests.postSemToken(body, url, acao);
  },
  
  fazerLoginFirebaseFacebook() {
    
  },

  fazerLoginPorFacebook(tokenFacebook) {
    let acao = (response, dispatch) => {
      AsyncStorage.setItem('token', response.headers.get('token'));
      dispatch(loginActions.loginRealizado());
      return response;
    };
    let url = `${configuracao.URL_LOGIN}/v1/autenticar/facebook`;
    return axiosRequests.postSemToken(body, url, acao);
  },
};

export default loginApi;
