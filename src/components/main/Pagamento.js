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
import {
  List,
  TextInput
  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class Pagamento extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    const credit_card = ["Visa", "Mastercard","Elo"];
    const [numcard, titular, validade, cvv] = React.useState('');
    return(
      <View>
        <View>
          {/* Drop down para o tipo de cartao*/}
        </View>
        <View>
          <TextInput 
            label="Número do cartão"
            value={numcard}
            onChangeText={text => setText(text)}
            mode="outline"
          />
          <TextInput 
            label="Titular do cartão"
            value={titular}
            onChangeText={text => setText(text)}
            mode="outline"
          />
        </View>
      </View>
    );
  }
}

export default Pagamento;