import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

  class Pedidos extends Component {
    constructor(props) {
      super(props);

      this.state = {
        pedidos: [],
      };
  }

  //192.168.15.27
  //192.168.15.72
  async getPedidos() {
    var url = 'http://192.168.15.27:3001/cardapio/';
    await axios
      .get(url)
      .then(responseJson => {
        this.setState(
          {isSearching: false, dataSource: responseJson},
          function() {
            this.arrayholder = responseJson.data;
          },
        );
      })
      .catch(err => {
        console.log(err);
    });
  }


  /*componentDidMount(){
    this.getPedidos();
  }*/

  render() {
    return (
    <View>
      <ScrollView>
        {pedidos.map((pedido, i) => {
          return (
            <View key={pedido.id}>
              <Text>{pedido.numero}</Text>
              <Text>{pedido.status}</Text>
              {pedido.itens.map((item, i) => {
                return (
                  <View key={item.id}>
                    <Text>{item.nome}</Text>
                    <Text>{item.observacoes}</Text>
                    <Text>{item.quantidade}</Text>
                    <Text>{item.valor}</Text>
                  </View>
                );
              })}
              <Text>{pedido.valor_total}</Text>
              <Text>{pedido.data_pedido }</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
    );
  }
}

export default Pedidos;
