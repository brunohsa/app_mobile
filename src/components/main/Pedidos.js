import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

class Pedidos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pedidos: null,
      isLoading: false,
    };
  }

  //192.168.15.27
  //192.168.15.72

  componentDidMount() {
    this.setState({isLoading: true});
    let url = 'http://192.168.15.72:3001/pedidos/';
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({pedidos: json, isLoading: false});
        return json;
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator animating={true} color={Colors.red200} />
        </View>
      );
    }
    return (
      <View>
        <ScrollView>
          {this.state.pedidos !== null ? (
            this.state.pedidos.pedidos.map((pedido, i) => {
              return (
                <View key={pedido.id}>
                  <Text>{pedido.numero}</Text>
                  <Text>{pedido.status}</Text>
                  {pedido.itens.map((item, j) => {
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
                  <Text>{pedido.data_pedido}</Text>
                </View>
              );
            })
          ) : (
            <View />
          )}
        </ScrollView>
      </View>
    );
  }
}

export default Pedidos;
