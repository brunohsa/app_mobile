/* eslint-disable prettier/prettier */
import { AsyncStorage } from 'react-native';
import erroActions from '../actions/ErroAction';
import loginActions from '../actions/LoginAction';

const CODIGO_TOKEN_EXPIRADO = '001';

let axiosRequests = {
  postSemToken(body, url, acao) {
    return this.post(null, body, url, acao);
  },
  post(token, body, url, acao) {
    return (dispatch) => {
      this.fetch(token, body, url, acao, 'POST', dispatch);
    };
  },

  put(token, body, url, acao) {
    return (dispatch) => {
      this.fetch(token, body, url, acao, 'PUT', dispatch);
    };
  },

  delete(token, url, acao) {
    return (dispatch) => {
      this.fetch(token, null, url, acao, 'DELETE', dispatch);
    };
  },

  get(token, url, acao) {
    return (dispatch) => {
      this.fetch(token, null, url, acao, 'GET', dispatch);
    };
  },

  async fetch(token, body, url, acao, method, dispatch) {    
    let tokenString = token ? await token : null
    return fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'token': tokenString,
      },
      body: body,
    })
    .then(response => {
      let contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return response.json().then(json => retorno(json, response.headers));
      }
      if (contentType && contentType.includes('image/jpeg')) {
        return response.blob().then(blob => retorno(blob, response.headers));
      }
      return response.text().then(json => retorno(json, response.headers));
    })
    .then(response => {
      tratarErro(response, dispatch);
      return acao(response, dispatch);
    })
    .catch(e => {
      console.log(`erro: ${e.message}`);
      dispatch(erroActions.apresentarErro(e.message));
    });
  },
};

function retorno(body, headers) {
  return {
      body: body,
      headers: headers,
  };
}

function tratarErro(response, dispatch) {
  let erro = response.body.erro;
  if (erro) {
     erro.codigo === CODIGO_TOKEN_EXPIRADO ? fazerLogoff(dispatch) : null;
     console.log(erro.mensagem);
     throw Error(erro.mensagem);
  }
}

function fazerLogoff(dispatch) {
  AsyncStorage.removeItem('token');
  dispatch(loginActions.fazerLogout());
}

export default axiosRequests;
