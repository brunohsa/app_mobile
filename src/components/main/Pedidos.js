import React, {Component} from 'react';
import { connect } from 'react-redux'
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

import carrinhoAPI  from '../redux/api/carrinhoAPI';

class Pedidos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.props.buscarPedidos();
  }

  componentDidMount() {
    //alert(JSON.stringify(this.props.carrinhoStore))
    //alert(this.props.carrinhoStore.pedidos)
  }
  
  render() {
    //let { pedidos } = this.props.carrinhoStore

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
          {
            this.props.carrinhoStore && this.props.carrinhoStore.pedidos ? this.props.carrinhoStore.pedidos.map(pedido => {
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
            : (
            <View />
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    carrinhoStore: state.carrinho
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buscarPedidos: () => {
      dispatch(carrinhoAPI.buscarPedidos());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pedidos);
