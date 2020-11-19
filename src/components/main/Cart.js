import * as React from 'react';
import { connect } from 'react-redux'
import {View} from 'react-native';
import {Text, Button, Card} from 'react-native-elements';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';

import carrinhoAPI  from '../redux/api/carrinhoAPI';
import loaderAction  from '../redux/actions/LoaderAction';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      quantidade: 1
    }

    this.props.buscarCarrinho();
  }

  aumentarQuantidade(cardapioId, produtoId) {
      this.props.atualizarQuantidadeItens(cardapioId, produtoId, 1)
      
      let carrinho = carrinhoStore.carrinho ? carrinhoStore.carrinho : null
      let item = carrinho ? carrinho.itens.filter(item => item.id === produtoId)[0] : null
      item ? item.quantidade += 1 : null

      this.setState(prevstate => ({ quantidade: prevstate.quantidade + 1, carrinho: carrinho }));
  }

  diminuirQuantidade(cardapioId, produtoId) {
    if (this.state.quantidade > 1) {
      this.props.atualizarQuantidadeItens(cardapioId, produtoId, -1)
      this.setState(prevstate => ({ quantidade: prevstate.quantidade - 1 }));
    }
  }

  render() {
    let { carrinhoStore, loaderStore } = this.props 
    let carrinho = carrinhoStore.carrinho ? carrinhoStore.carrinho : null

    if (loaderStore.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alingItens: 'center'}}>
          <ActivityIndicator
            animating={true}
            color={Colors.red200}
            size="large"
          />
        </View>
      )
    }
    return (
      <View>
        <View style={{marginTop: 15, marginLeft: 8}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingLeft: 5,
              paddingBottom: 9,
            }}>
            Carrinho
          </Text>
        </View>
        <View style={{marginTop: 15, marginLeft: 8}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              paddingLeft: 5,
              paddingBottom: 9,
            }}>
            Itens
          </Text>
        </View>
        {
          <View>
            {
              carrinho && carrinho.itens.map(item => {
                return (
                  <Card>
                    <View key={item.id}>
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
                        <Text style={{color: '#5E5B5B'}}> {item.produto.nome}</Text>
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
                          R$ {item.produto.valor}
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 20, marginRight: 30, position: 'absolute', right: 0, color: '#fff'}}>
                        <Button
                          buttonStyle={{
                            backgroundColor: '#f00',
                            color: 'white',
                            marginTop: 10,
                            height: 35,
                            width: 35
                          }}
                          title="+"
                          type="solid"
                          onPress={() => this.aumentarQuantidade(item.produto.cardapio_id, item.produto.id)} />
                        <Text style={{width: 20, alignSelf: 'center', marginLeft: 10, marginTop: 10}}>
                          { item.quantidade }
                        </Text>
                        <Button
                          buttonStyle={{
                            backgroundColor: '#f00',
                            color: 'white',
                            marginTop: 10,
                            height: 35,
                            width: 35
                          }}
                          title="-"
                          type="solid"
                          onPress={() => this.diminuirQuantidade(item.produto.cardapio_id, item.produto.id)} />
                      </View>
                    </View>
                  </Card>
                );
              })
            }
            <View
              style={{
                alignItems: 'flex-end',
                marginRight: '10%',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#f00',
                  alignSelf: 'flex-end',
                  marginRight: 10,
                }}>
                Total: R$ {carrinho && carrinho.valor_total ? carrinho.valor_total : null}
              </Text>
            </View>
          </View>
        }
        <Button
          buttonStyle={{
            backgroundColor: '#f00',
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
          disabled={carrinho == null || carrinho == undefined || carrinho.itens.length == 0}
          title="Pagamento"
          type="solid"
          onPress={() => Actions.pagamento()}
        />
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
    buscarCarrinho: () => {
      dispatch(loaderAction.startLoader())
      dispatch(carrinhoAPI.buscarCarrinho());
    },
    atualizarQuantidadeItens: (cardapioId, idProduto, quantidade) => {
      dispatch(carrinhoAPI.adicionarProdutoNoCarrinho(cardapioId, idProduto, quantidade));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
