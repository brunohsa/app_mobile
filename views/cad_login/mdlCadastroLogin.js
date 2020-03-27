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

const convert = (props) =>{
  console.log('aa')
  if(props.visible  == 'true')
    return true;
  else
    return false;
}

export default function Cad_login (props) {
    return(
        <View>     
          <Modal
            animationType="slide"
            transparent={false}
            visible={convert(props)}>
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
    );
}