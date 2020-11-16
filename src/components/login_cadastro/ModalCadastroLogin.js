/* eslint-disable react-hooks/rules-of-hooks */
import React, {Component, useRef} from 'react';
import { connect } from 'react-redux'

import {View, StyleSheet} from 'react-native';
import {Text, Button, Input, ThemeProvider} from 'react-native-elements';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import * as Yup from 'yup';

import loginAPI from '../redux/api/loginApi';
import cadastroAPI  from '../redux/api/cadastroAPI';

function componentDidUpdate() {
  if(this.props.loginStore.loginRealizado) {
    Actions.index();
  }
}
function logarComFacebook() {
  this.props.logarComFacebook()
}

function logarComEmail() {
  this.props.logarComEmail()
}

function renderLogin() {
  const email = useRef(null);
  const senha = useRef(null);

  const FormSchema = Yup.object().shape({
    email: Yup.string().required('Campo obrigatório'),
    senha: Yup.string()
      .required('Campo obrigatório')
      .min(8, 'Digite pelo menos 8 caracteres')
      .matches(
        '^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.*[@#$%!:()\\-_?&])(?=\\S+$)',
      ),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        senha: '',
      }}
      onSubmit={values => {
        console.log(values);
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
          <Text>Entrar</Text>
          <View style={{marginTop: 15}}>
            <TextInput
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
            <Button
              title="Fazer login"
              raised
              type="solid"
              onPress={handleSubmit}
              onPress={() => logarComEmail()}
            />
          </View>
          <View style={{marginTop: 15}}>
            <Button
              title="            Entrar pelo Facebook            "
              raised
              type="solid"
              onPress={() => logarComFacebook()}
              icon={<Icon name="facebook-square" color="white" size={20} />}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

function criarCadastro() {
  let { nome, email, senha } = this.state
  this.props.criarCadastro(nome, email, senha)
}

function renderCadastro() {
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

  return (
    <Formik
      initialValues={{
        email: '',
        user: '',
        senha: '',
      }}
      onSubmit={values => {
        console.log(values);
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
          <Text>Cadastro</Text>
          <View style={{marginTop: 15}}>
            <TextInput
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
              ref={user}
              label="Nome"
              secureTextEntry
              placeholder="Digite seu nome"
              value={values.user}
              left={props => <TextInput.Icon {...props} icon="user" />}
              icon="user"
              onChangeText={handleChange('user')}
              onBlur={() => setFieldTouched('user', true)}
            />
            {errors.user && touched.user && <Text>{errors.user}</Text>}
            <TextInput
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
            <Button
              title="Fazer cadastro"
              raised
              type="solid"
              onPress={handleSubmit}
              onPress={() => criarCadastro()}
            />
          </View>
          <View style={{marginTop: 15}}>
            <Button
              title="         Cadastre-se pelo Facebook         "
              raised
              type="solid"
              containerStyle={{position: 'relative'}}
              iconContainerStyle={{position: 'absolute', right: 20}}
              icon={<Icon name="facebook-square" color="white" size={20} />}
              onPress={() => logarComFacebook()}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

function ModalLoginCadastro(props) {
  if (props.opc == 'login') {
    return renderLogin();
  } else if (props.opc == 'cadastro') {
    return renderCadastro();
  }
}

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

const theme = {
  Button: {
    buttonStyle: {
      marginTop: 5,
      backgroundColor: 'red',
      padding: 10,
    },
    Icon: {
      iconStyle: {},
    },
  },
};

const mapStateToProps = state => {
  return {
    loginStore: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logarComFacebook: () => {
      dispatch(loginAPI.fazerLoginFirebaseFacebook());
    },
    logarComEmail: (email, senha) => {
      dispatch(loginAPI.fazerLogin(email, senha));
    },
    criarCadastro: (nome, email, senha) => {
      dispatch(cadastroAPI.fazerCadastro(nome, email, senha));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalLoginCadastro);
