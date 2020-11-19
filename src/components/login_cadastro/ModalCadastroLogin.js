/* eslint-disable react-hooks/rules-of-hooks */
import React, {Component, useRef, useEffect } from 'react';
import { connect } from 'react-redux'
import {View, StyleSheet} from 'react-native';
import {Text, Button, ThemeProvider} from 'react-native-elements';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ActivityIndicator, TextInput, Colors} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import * as Yup from 'yup';

import loginAPI from '../redux/api/loginApi';
import cadastroAPI  from '../redux/api/cadastroAPI';
import loaderAction  from '../redux/actions/LoaderAction';
import loginAction  from '../redux/actions/LoginAction';
import cadastroAction  from '../redux/actions/CadastroAction';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#f00',
    padding: 8,
    borderRadius: 8,
    elevation: 3,
    shadowOffset: {width: 5, height: 5},
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalView: {
    justifyContent: 'flex-end',
    width: '100%',
    height: '70%',
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 30,
    margin: 0,
  },
});

function goToMain() {
  Actions.index();
}

function redirecionar(props) {
  useEffect(() => {
    if(props.loginStore && props.loginStore.loginRealizado) {
      Actions.index();
      return;
    }
    if(props.cadastroStore && props.cadastroStore.cadastroRealizado) {
      //props.flagCadastroRealizado(false);
      Actions.index();
      return;
    }
  })
}

function renderLogin(props) {
  redirecionar(props)
  
  const email = useRef(null);
  const senha = useRef(null);

  const FormSchema = Yup.object().shape({
    email: Yup.string().required('Campo obrigatório'),
    senha: Yup.string().required('Campo obrigatório'),
  });

  if (props.loaderStore && props.loaderStore.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alingItens: 'center'}}>
        <ActivityIndicator
          animating={true}
          color={Colors.red200}
          size="large"
        />
      </View>
    );
  }
  return (
    <Formik
      initialValues={{
        email: '',
        senha: '',
      }}
      onSubmit={values => {
        props.logarComEmail(values.email, values.senha)
      }}
      validationSchema={FormSchema}>
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        setFieldTouched,
      }) => (
        <View style={styles.modalView}>
          <Text style={{fontSize: 22, fontWeight: 'bold', paddingLeft: 5}}>
            Entrar
          </Text>
          <View style={{marginTop: 15}}>
            <TextInput
              style={{backgroundColor: '#fff'}}
              ref={email}
              label="E-mail"
              keyboardType="email-address"
              placeholder="Digite o seu e-mail"
              left={props => <TextInput.Icon {...props} icon="email" />}
              icon="email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email', true)}
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}
            <TextInput
              style={{backgroundColor: '#fff'}}
              ref={senha}
              label="Senha"
              secureTextEntry
              placeholder="Digite a senha"
              value={values.senha}
              left={props => <TextInput.Icon {...props} icon="lock" />}
              icon="lock"
              onChangeText={handleChange('senha')}
              onBlur={() => setFieldTouched('senha', true)}
            />
            {errors.senha && touched.senha && <Text>{errors.senha}</Text>}
            <View style={{marginTop: 15}}>
              <Button
                buttonStyle={{backgroundColor: '#f00'}}
                title="Entrar"
                raised
                type="solid"
                onPress={handleSubmit}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Button
              buttonStyle={{backgroundColor: '#f00'}}
              title="            Entrar pelo Facebook            "
              raised
              type="solid"
              onPress={() => props.logarComFacebook()}
              icon={<Icon name="facebook-square" color="white" size={20} />}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

function renderCadastro(props) {
  redirecionar(props)

  const email = useRef(null);
  const user = useRef(null);
  const senha = useRef(null);

  const FormSchema = Yup.object().shape({
    email: Yup.string()
      .required('Campo obrigatório')
      .matches('^[A-Za-z](.*)([@]{1})(.{1,})(\\.)(.{1,})'),
    user: Yup.string().required('Campo obrigatório'),
    senha: Yup.string()
      .required('Campo obrigatório')
      .min(8, 'Digite pelo menos 8 caracteres'),
  });

  if (props.loaderStore && props.loaderStore.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alingItens: 'center'}}>
        <ActivityIndicator
          animating={true}
          color={Colors.red200}
          size="large"
        />
      </View>
    );
  }
  return (
    <Formik
      initialValues={{
        email: '',
        user: '',
        senha: '',
      }}
      onSubmit={values => {
        props.criarCadastro(values.user, values.email, values.senha)
      }}
      validationSchema={FormSchema}>
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        setFieldTouched,
      }) => (
        <View style={styles.modalView}>
          <Text style={{fontSize: 22, fontWeight: 'bold', paddingLeft: 5}}>
            Cadastro
          </Text>
          <View style={{marginTop: 15, marginBotton: 20}}>
            <TextInput
              style={{backgroundColor: '#fff'}}
              ref={email}
              label="E-mail"
              keyboardType="email-address"
              placeholder="Digite o seu e-mail"
              left={props => <TextInput.Icon {...props} icon="email" />}
              icon="email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email', true)}
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}
            <TextInput
              style={{backgroundColor: '#fff'}}
              ref={user}
              label="Nome"
              placeholder="Digite seu nome"
              value={values.user}
              left={props => <TextInput.Icon {...props} icon="user" />}
              icon="user"
              onChangeText={handleChange('user')}
              onBlur={() => setFieldTouched('user', true)}
            />
            {errors.user && touched.user && <Text>{errors.user}</Text>}
            <TextInput
              style={{backgroundColor: '#fff'}}
              ref={senha}
              label="Senha"
              secureTextEntry
              placeholder="Digite a senha"
              value={values.senha}
              left={props => <TextInput.Icon {...props} icon="lock" />}
              icon="lock"
              onChangeText={handleChange('senha')}
              onBlur={() => setFieldTouched('senha', true)}
            />
            {errors.senha && touched.senha && <Text>{errors.senha}</Text>}
            <View style={{marginTop: 15}}>
              <Button
                buttonStyle={{backgroundColor: '#f00'}}
                title="Cadastrar"
                raised
                type="solid"
                onPress={handleSubmit}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Button
              buttonStyle={{backgroundColor: '#f00'}}
              title="         Cadastre-se pelo Facebook         "
              raised
              type="solid"
              onPress={() => goToMain()}
              containerStyle={{position: 'relative'}}
              iconContainerStyle={{position: 'absolute', right: 20}}
              icon={<Icon name="facebook-square" color="white" size={20} />}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

function ModalLoginCadastro(props) {
  if (props.opc == 'login') {
    return renderLogin(props);
  } else if (props.opc == 'cadastro') {
    return renderCadastro(props);
  }
}

const mapStateToProps = state => {
  return {
    loginStore: state.login,
    cadastroStore: state.cadastro,
    loaderStore: state.loader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logarComFacebook: () => {
      dispatch(loginAPI.fazerLoginFirebaseFacebook());
    },
    logarComEmail: (email, senha) => {
      dispatch(loaderAction.startLoader());
      dispatch(loginAPI.fazerLogin(email, senha));
    },
    criarCadastro: (nome, email, senha) => {
      dispatch(loaderAction.startLoader());
      dispatch(cadastroAPI.fazerCadastro(nome, email, senha));
    },
    flagLoginRealizado: (loginRealizado) => {
      dispatch(loginAction.flagLoginRealizado(loginRealizado));
    },
    flagCadastroRealizado: (cadastroRealizado) => {
      dispatch(cadastroAction.flagCadastroRealizado(cadastroRealizado));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLoginCadastro);