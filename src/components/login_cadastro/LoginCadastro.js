import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import {
  Text,
  Button,
  ThemeProvider
} from 'react-native-elements';
import { Actions } from "react-native-router-flux";

class App extends Component {
  constructor(props){
    super(props);
  }
 
  goToModal = (page) =>{
    console.log(page);
    Actions.modal({opc:page});
  }

  render = () =>{
   
    return (    
      <>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor='#fff' />
        <SafeAreaView style={styles.body}>
          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>LOGO</Text>
          </View>
          <View style={styles.contContainer}>
            <View style={styles.container}>
              <Button 
                title="Fazer Cadastro" 
                raised
                onPress={() => {this.goToModal('cadastro')}} 
                type="solid" />
            </View>
            <View style={styles.container}>
              <Button 
                title="Fazer Login"
                raised
                onPress={() => {this.goToModal('login')}} 
                type="solid" />
            </View>
          </View>
        </SafeAreaView>
      </ThemeProvider>
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
        padding:10,
        backgroundColor: 'red',
        },
    }
  };

export default App;
