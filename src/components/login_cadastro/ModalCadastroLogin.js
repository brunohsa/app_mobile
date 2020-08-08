import React, {Component} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

class ModalLoginCadastro extends Component{

  goToMain(){
    Actions.index();
  }

  renderLogin(){
    return(
      <ThemeProvider theme={theme}>
        <View style={styles.modalView}>
        <Text>Entrar</Text>
          <View style={{marginTop:15}}>
            <Input 
              keyboardType='email-address'
              autoCompleteType='email'
              maxLength={40} 
              placeholder="Digite o seu e-mail"
              leftIcon={
                <Icon
                  name='envelope-o'
                  size={24}
                  color='black'
                />
              }
            />
            <Input 
              maxLength={40} 
              secureTextEntry 
              placeholder="Digite a senha" 
              leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='black'
                />
              }
            />
            <Button 
              title="Fazer login"
              raised
              type="solid"
              onPress={() => this.goToMain()}
            />
          </View>
          <View style={{marginTop:15}}>
            <Button 
                title="            Entrar pelo Facebook            "
                raised
                type="solid"
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
      </ThemeProvider>
    );
  }

  renderCadastro(){
    return(
      <ThemeProvider theme={theme}>
        <View style={styles.modalView} >
          <Text>Cadastro</Text>
          <View style={{marginTop:15}}>
            <Input 
              keyboardType='email-address'
              maxLength={40} 
              placeholder="Digite o seu e-mail"
              leftIcon={
                <Icon
                  name='envelope-o'
                  size={24}
                  color='black'
                />
              }
            />
            <Input 
              maxLength={40} 
              placeholder="Digite o seu nome"
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
              />
            <Input 
              maxLength={40} 
              secureTextEntry 
              placeholder="Digite a senha" 
              leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='black'
                />
              }
            />
            <Button 
              title="Fazer cadastro"
              raised
              type="solid"
              onPress={() => this.goToMain()}
            />
          </View>
          <View style={{marginTop:15}}>
            <Button 
              title="         Cadastre-se pelo Facebook         "
              raised
              type="solid"
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
      </ThemeProvider>
    );
  }

  render(){
    if (this.props.opc == 'login'){
      return this.renderLogin();
    }
    else if(this.props.opc == 'cadastro'){
      return this.renderCadastro();
    }   
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