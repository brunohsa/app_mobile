import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Text,
  Button,
  Input,
  ThemeProvider,
  Card
} from 'react-native-elements';
import axios from 'axios';
import {List, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class Configure extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      expanded:true,
      nome:'',
      telefone:'',
      senha:''
    }
  }

  render(){
    return(
      <View>
        <TextInput 
          label="Nome"
          value={this.state.nome}
          onChangeText={text => this.setState({nome:text})}
          mode="outlined"/>
        <TextInput 
          label="Telefone"
          value={this.state.telefone}
          onChangeText={text => this.setState({telefone:text})}
          mode="outlined"/>
        <TextInput 
          label="Nova senha"
          value={this.state.telefone}
          onChangeText={text => this.setState({senha:text})}
          mode="outlined"/>
        <TextInput 
          label="Digite novamente a senha"
          value={this.state.telefone}
          onChangeText={text => this.setState({senha:text})}
          mode="outlined"/>
      </View>
    );
  }
}

export default Configure;