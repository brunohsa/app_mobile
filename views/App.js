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
        <StatusBar barStyle="dark-content" backgroundColor='#fff' />
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
                <View style={{marginTop:15}}>
                  <TouchableOpacity style={styles.button} onPress={() => {this.setVisibility(true)} } >
                     <Text style={styles.buttonText}><FontAwesomeIcon icon={faEnvelope} style={{color:'#fff'}}/> Cadastre-se por e-mail</Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop:15}}>
                  <TouchableOpacity style={styles.button} onPress={() => {this.setVisibility(true)} } >
                    <Text style={styles.buttonText}><FontAwesomeIcon icon={faFacebookSquare} style={{color:'#fff'}}/> Cadastre-se por Facebook</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>


          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>LOGO</Text>
          </View>
          <View style={styles.contContainer}>
            <View>
              <Text style={styles.txt}>Faça já seu cadastro</Text>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={() => {this.setVisibility(true)} } >
                <Text style={styles.buttonText}>Opções de cadastro</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={() => {this.setVisibility(true)} } >
                <Text style={styles.buttonText}>Já possui cadastro?</Text>
              </TouchableOpacity>
            </View>
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
      justifyContent:'center',
      flex:2,
      backgroundColor: '#fff',
      marginTop: 100,
      marginBottom:55,
      alignSelf: 'center',
      paddingHorizontal: 24,
    },
    container:{
      marginTop:20,
    },
    contContainer: {
      backgroundColor: '#fff',
      flex:2,
      marginTop: 5,
      paddingHorizontal: 24,
    },
    txt: {
      fontSize:20,
      color:'#000',
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: '#f00',
    },
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

export default App;
