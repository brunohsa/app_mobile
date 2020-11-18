import React, {Component} from 'react';
import { connect } from 'react-redux'
import {View, Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

import carrinhoAPI  from '../redux/api/carrinhoAPI';
import loaderAction  from '../redux/actions/LoaderAction';

class Pedidos extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.buscarPedidos();
  }
  
  render() {
    let { carrinhoStore, loaderStore } = this.props

    let pedidos = carrinhoStore && carrinhoStore.pedidos ? carrinhoStore.pedidos : []
    
    if (loaderStore.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alingItens: 'center'}}>
          <ActivityIndicator
            animating={true}
            color={Colors.red200}
            size="large"
          />
        </View>
      );
    }
    return (
      <View style={{marginBottom: 10}}>
        <ScrollView>
          {
            pedidos && pedidos.length > 0
            ? pedidos.map(pedido => {
              let status = '';
              let cor = '';
              switch (pedido.status) {
                case 'PENDENTE_PREPARACAO':
                  status = 'Em Preparação';
                  cor = '#FF8C00';
                  break;
                case 'PREPARANDO':
                  status = 'Preparando';
                  cor = 'blue';
                  break;
                case 'CONCLUIDO':
                  status = 'Concluído';
                  cor = 'green';
                  break;
                case 'CANCELADO':
                  status = 'Cancelado';
                  cor = 'red';
                  break;
              }
              return (
                <View key={pedido.id}>
                  <Card
                    containerStyle={{
                      borderColor: cor,
                      borderStyle: 'solid',
                      borderWidth: 1,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: cor,
                        alignSelf: 'flex-end',
                      }}>
                      {status}
                    </Text>
                    <Text style={{fontWeight: 'bold'}}>{pedido.numero}</Text>
                    {pedido.itens.map(item => {
                      return (
                        <View key={item.id} style={{marginBottom: 10, marginTop: 10}}>
                          <View
                            style={{
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                              flexDirection: 'row',
                            }}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                color: '#000',
                                marginLeft: 25,
                              }}>
                              Item:
                            </Text>
                            <Text style={{color: '#5E5B5B'}}> {item.nome}</Text>
                          </View>
                          <View
                            style={{
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                              flexDirection: 'row',
                            }}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                color: '#000',
                                marginLeft: 25,
                              }}>
                              Observaçoes:
                            </Text>
                            <Text style={{color: '#5E5B5B'}}>
                              {' '}
                              {item.observacoes}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                              flexDirection: 'row',
                            }}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                color: '#000',
                                marginLeft: 25,
                              }}>
                              Quantidade:
                            </Text>
                            <Text style={{color: '#5E5B5B'}}>
                              {' '}
                              {item.quantidade}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexWrap: 'wrap',
                              alignItems: 'flex-start',
                              flexDirection: 'row',
                            }}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                color: '#000',
                                marginLeft: 25,
                              }}>
                              Preço:
                            </Text>
                            <Text style={{color: '#5E5B5B'}}>
                              R$ {item.valor}
                            </Text>
                          </View>
                        </View>
                      );
                    })}
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#f00',
                        alignSelf: 'flex-end',
                        marginRight: 45,
                      }}>
                      Total: R$ {pedido.valor_total}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#5E5B5B',
                        alignSelf: 'flex-end',
                        marginRight: 45,
                      }}>
                      {pedido.data_pedido}
                    </Text>
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
    carrinhoStore: state.carrinho,
    loaderStore: state.loader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buscarPedidos: () => {
      dispatch(loaderAction.startLoader());
      dispatch(carrinhoAPI.buscarPedidos());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pedidos);
