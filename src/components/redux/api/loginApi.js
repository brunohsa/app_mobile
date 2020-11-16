import loginActions from '../actions/LoginAction';
import axiosRequests from '../api/axiosRequests';
import configuracao from '../config';
import {AsyncStorage} from 'react-native';

import { firebaseImpl } from '../../utils/firebaseUtil'

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

    let url = `${configuracao.URL_LOGIN}/v1/autenticar`;
    return axiosRequests.postSemToken(body, url, acao);
  },


  fazerLoginFirebaseFacebook() {
    let provider = firebaseImpl.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      fazerLoginPorFacebook(token)
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
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
