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
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {isVisible:false};
  }

  setVisibility = (v) => {
    this.setState({isVisible:v});
  }

  
  render = () =>{
   
    return (    
      <>
        <StatusBar barStyle="dark-content" backgroundColor='rgba(0,0,0,0)' translucent={true} />
        <SafeAreaView style={styles.body}>
            <Modal
              backdropColor="#000"
              backdropOpacity={0.8}
              animationIn="slideInUp"
              animationOut="slideOutDown"
              animationInTiming={600}
              animationOutTiming={600}
              backdropTransitionInTiming={600}
              backdropTransitionOutTiming={600}
              isVisible={this.state.isVisible}
              onRequestClose={() => {
                this.setVisibility(false);
              }}
              >
              <View style={styles.modalView} >
                <View>
                  <TextInput
                    style={styles.input}
                    textContentType='emailAddress' 
                    placeholder='Digite seu email' 
                    onChangeName ={text => onChangeText(text)} 
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    textContentType='password'
                    secureTextEntry 
                    placeholder='Digite sua senha' 
                    onChangePass ={text => onChangeText(text)} 
                  />
                </View>
                <View>
                  <TouchableOpacity>
                    <Text>Entrar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>


          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>LOGO</Text>
          </View>
          <View style={styles.contContainer}>
            <Text>Faça já seu cadastro</Text>
          </View>
          <View style={styles.contContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {this.setVisibility(true)} } >
              <Text>Opções de cadastro</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {this.setVisibility(true)} } >
              <Text>Já possui login?</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
  
  const styles = StyleSheet.create({
    body: {
      flex:1,
      backgroundColor: '#fff',
      margin:0
      
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
      color: '#f00',
    },
    input: {
      borderColor: '#f00',
      borderRadius:5,
      borderWidth: 1,
      backgroundColor:'#fff',
      color: '#000',
    },
    button: {
      backgroundColor: '#f00',
      padding: 8,
      borderRadius:3,
    },
    buttonText: {
      color: '#dcdcde',
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    },
    modalView :{
      width:'100%',
      height:'70%',
      borderRadius:15,
      backgroundColor:'#fff',
      padding: 30,
      margin:0
    }
  });

export default App;
