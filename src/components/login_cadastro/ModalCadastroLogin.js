import React, {Component, useRef} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Text,
  Button,
  Input,
  ThemeProvider
} from 'react-native-elements';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  TextInput
} from "react-native-paper";
import { Actions } from 'react-native-router-flux';
import * as Yup from 'yup';

  function goToMain(){
    Actions.index();
  }

  function renderLogin(){
    const email = useRef(null);
    const senha = useRef(null);
    
    const FormSchema = Yup.object().shape({
      email: Yup.string().required('Campo obrigatório'),
      senha: Yup.string().required('Campo obrigatório').min(8, 'Digite pelo menos 8 caracteres'),
    });

    return(
      <Formik
        initialValues={{
          email:'',
          senha:'',
        }}
        onSubmit={values => {console.log(values);}}
        validationSchema={FormSchema}
        >
        {({values,
           handleChange,
           handleSubmit,
           errors,
           touched,
           setFieldTouched}) => (
        <View style={styles.modalView}>
        <Text>Entrar</Text>
          <View style={{marginTop:15}}>
            <TextInput 
              ref={email}
              label="E-mail"
              keyboardType='email-address'
              placeholder="Digite o seu e-mail"
              left={props => <TextInput.Icon {...props} icon="envelope-o" />}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email', true)}
              />
            {errors.email && touched.email && <Text>{errors.email}</Text>}
            <TextInput 
              ref={senha}
              label='Senha'
              secureTextEntry 
              placeholder="Digite a senha" 
              value={values.senha}
              left={props => <TextInput.Icon {...props} icon="lock" />}
              onChangeText={handleChange('senha')}
              onBlur={() => setFieldTouched('senha', true)}
            />
             {errors.senha && touched.senha && (<Text>{errors.senha}</Text>)}
            <Button 
              title="Fazer login"
              raised
              type="solid"
              onPress={handleSubmit}
              //onPress={() => goToMain()}
            />
          </View>
          <View style={{marginTop:15}}>
            <Button 
                title="            Entrar pelo Facebook            "
                raised
                type="solid"
                onPress={() => goToMain()}
                icon={
                  <Icon
                    name="facebook-square"
                    color="white"
                    size={20}
                  />
                }
            />
          </View>
        </View>
        )}
        </Formik>
    );
  }

  function renderCadastro(){
    const email = useRef(null);
    const user = useRef(null);
    const senha = useRef(null);
    
    const FormSchema = Yup.object().shape({
      email:  Yup.string().required('Campo obrigatório'),
      user:   Yup.string().required('Campo obrigatório'),
      senha:  Yup.string().required('Campo obrigatório').min(8, 'Digite pelo menos 8 caracteres'),
    });

    return(
      <Formik
        initialValues={{
          email:'',
          user:'',
          senha:'',
        }}
        onSubmit={values => {console.log(values);}}
        validationSchema={FormSchema}
        >
        {({values,
           handleChange,
           handleSubmit,
           errors,
           touched,
           setFieldTouched}) => (
        <View style={styles.modalView} >
          <Text>Cadastro</Text>
          <View style={{marginTop:15}}>
            <TextInput 
              ref={email}
              label="E-mail"
              keyboardType='email-address'
              placeholder="Digite o seu e-mail"
              left={props => <TextInput.Icon {...props} icon="envelope-o" />}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email', true)}
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}
            <TextInput 
              ref={user}
              label='Senha'
              secureTextEntry 
              placeholder="Digite seu nome" 
              value={values.user}
              left={props => <TextInput.Icon {...props} icon="user" />}
              onChangeText={handleChange('user')}
              onBlur={() => setFieldTouched('user', true)}
            />
             {errors.user && touched.user && (<Text>{errors.user}</Text>)}
            <TextInput 
              ref={senha}
              label='Senha'
              secureTextEntry 
              placeholder="Digite a senha" 
              value={values.senha}
              left={props => <TextInput.Icon {...props} icon="lock" />}
              onChangeText={handleChange('senha')}
              onBlur={() => setFieldTouched('senha', true)}
            />
             {errors.senha && touched.senha && (<Text>{errors.senha}</Text>)}
            <Button 
              title="Fazer cadastro"
              raised
              type="solid"
              onPress={handleSubmit}
              //onPress={() => goToMain()}
            />
          </View>
          <View style={{marginTop:15}}>
            <Button 
              title="         Cadastre-se pelo Facebook         "
              raised
              type="solid"
              onPress={() => goToMain()}
              containerStyle={{position:'relative'}}
              iconContainerStyle={{position:'absolute', right: 20}}
              icon={
                <Icon
                  name="facebook-square"
                  color="white"
                  size={20}
                />
              }
            />
          </View>
        </View>
        )}
        </Formik>
    );
  }

  function ModalLoginCadastro(props){
    if (props.opc == 'login'){
      return renderLogin();
    }
    else if(props.opc == 'cadastro'){
      return renderCadastro();
    }   
  }

const styles = StyleSheet.create({
  button: {
    flexDirection:'row',
    backgroundColor: '#f00',
    padding: 8,
    borderRadius:8,
    elevation: 3,
    shadowOffset: {width: 5, height:5},
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 2
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalView :{
    justifyContent:'flex-end',
    width:'100%',
    height:'70%',
    borderRadius:15,
    backgroundColor:'#fff',
    padding: 30,
    margin:0
  }
});

const theme ={
  Button:{
    buttonStyle: {
      marginTop:5,
      backgroundColor: 'red',
      padding:10,
      },
      Icon:{
        iconStyle: {
        }
      }
  },
};

export default ModalLoginCadastro