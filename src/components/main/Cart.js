import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Input, ThemeProvider, Card} from 'react-native-elements';
import axios from 'axios';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }
//  "id": "5fa076ae77d3744f78b0761a",
//  "itens": [],
//  "valor_total": 0,
//  "data_criacao": "02-11-2020 19:14:22"
  render() {
    return (
      <View>
        {carrinho.itens.map((item, i) => {
          <View key={item.id}>
            <Text>{item.nome}</Text>
            <Text>{item.observacoes}</Text>
            <Text>{item.quantidade}</Text>
            <Text>{item.valor}</Text>
          </View>
        })}
      </View>
    );
  }
}

export default Cart;
