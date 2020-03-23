/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'

const App =() => {
  const value1 = React.useState('Nome');
  const onChangeName = React.useState('Nome');
  const value2 = React.useState('Senha');
  const onChangePass = React.useState('Senha');
  const {body,titleContainer,contContainer,sectionTitle,button,buttonText,input} = styles;
  return (    
    <>
      <StatusBar barStyle="dark-content" backgroundColor='#ff4500' translucent/>
      <SafeAreaView style={body}>
            <View style={titleContainer}>
              <Text style={sectionTitle}>LOGO</Text>
            </View>
            <View style={contContainer}>
              <TextInput style={input} placeholder='Digite seu nome' onChangeName ={text => onChangeText(text)} value={value1}/>
            </View>
            <View style={contContainer}>
              <TextInput style={input} secureTextEntry placeholder='Digite sua senha' onChangePass ={ text => onChangeText(text)} value={value2} />
            </View>
            <View style={contContainer}>
              <TouchableOpacity style={button}>
                <Text style={buttonText}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <View style={contContainer}>
              <TouchableOpacity style={button}>
                <Text><FontAwesomeIcon icon={faFacebookSquare} />       Entrar com Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={button}>
                <Text><FontAwesomeIcon icon={faGoogle} />       Entrar com Google </Text>
              </TouchableOpacity>
            </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: '#ff4500',
    paddingBottom: 15,
    
  },
  titleContainer: {
    marginTop: 100,
    marginBottom:75,
    paddingHorizontal: 24,
  },
  contContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'white',
  },
  input: {
    borderColor: '#fff',
    borderRadius:3,
    borderWidth: 1,
    backgroundColor:'#fff',
    color: '#000',
   },
  button: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius:3,
  },
  buttonText: {
    color: '#ff4500',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default App;
