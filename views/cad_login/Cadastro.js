import React, {Component} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Modal
} from 'react-native';

export default class Cadastro extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
        <View>     
          <Modal
            animationType="slide"
            transparent={false}
            visible={true}>
            <View>
              <TextInput
                textContentType='emailAddress' 
                placeholder='Digite seu email' 
                onChangeName ={text => onChangeText(text)} 
              />
            </View>
            <View>
              <TextInput
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
          </Modal>
        </View>
            </>
        );
    }
}