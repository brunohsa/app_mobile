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
import {Card} from 'react-native-elements';
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
    let url = 'http://192.168.15.27:3001/pedidos/';
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
        <View style={{flex:1,justifyContent:'center', alingItens:'center'}}>
          <ActivityIndicator animating={true} color={Colors.red200} size='large' />
        </View>
      );
    }
    return (
      <View>
        <ScrollView>
          {this.state.pedidos !== null ? (
            this.state.pedidos.map((pedido, i) => {
              let status='';
              let cor='';
              switch (pedido.status) {
                case "PENDENTE_PREPARACAO":
                  status = "Em Preparação";
                  cor="#FF8C00";
                  break;
                case "PREPARANDO":
                  status = "Preparando";
                  cor="blue";
                  break;
                case "CONCLUIDO":
                  status = "Concluído";
                  cor="green";
                  break;
                case "CANCELADO":
                  status = "Cancelado";
                  cor="red";
                  break;
              }
              return (
                <View key={pedido.id}>
                  <Card containerStyle={{borderColor:cor, borderStyle:'solid', borderWidth:1}}>
                      <Text style={{fontWeight:'bold', color:cor, alignSelf:'flex-end'}}>{status}</Text>
                      <Text style={{fontWeight:'bold'}}>{pedido.numero}</Text>
                      {pedido.itens.map((item, j) => {
                        return (
                          <View key={item.id}>
                            <View style={{flexWrap: 'wrap', 
                                          alignItems: 'flex-start',
                                          flexDirection:'row'}}
                            >
                              <Text style={{fontWeight:'bold', color:'#000',marginLeft:25}}>Item:</Text>
                              <Text style={{color:'#5E5B5B'}}> {item.nome}</Text>
                            </View >
                            <View style={{flexWrap: 'wrap', 
                                          alignItems: 'flex-start',
                                          flexDirection:'row'}}>
                              <Text style={{fontWeight:'bold', color:'#000',marginLeft:25}}>Observaçoes:</Text>
                              <Text style={{color:'#5E5B5B'}}> {item.observacoes}</Text>
                            </View>
                            <View style={{flexWrap: 'wrap', 
                                          alignItems: 'flex-start',
                                          flexDirection:'row'}}>
                              <Text style={{fontWeight:'bold', color:'#000',marginLeft:25}}>Quantidade:</Text>
                              <Text style={{color:'#5E5B5B'}}> {item.quantidade}</Text>
                            </View>
                            <View style={{flexWrap: 'wrap', 
                                          alignItems: 'flex-start',
                                          flexDirection:'row'}}>
                              <Text style={{fontWeight:'bold', color:'#000',marginLeft:25}}>Preço:</Text>
                              <Text style={{color:'#5E5B5B'}}>R$ {item.valor}</Text>
                            </View>
                          </View>
                        );
                      })}
                      <Text style={{fontWeight:'bold', color:'#f00', alignSelf:'flex-end', marginRight:45}}>Total: R$ {pedido.valor_total}</Text>
                      <Text style={{fontWeight:'bold', color:'#5E5B5B', alignSelf:'flex-end', marginRight:45}}>{pedido.data_pedido}</Text>
                  </Card>
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
