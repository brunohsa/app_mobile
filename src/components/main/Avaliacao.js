import * as React from 'react';
import { connect } from 'react-redux'
import {View, Alert, StyleSheet} from 'react-native';
import {Text, Button, Card, Rating} from 'react-native-elements';
import {ActivityIndicator, Colors, TextInput} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';

import {ScrollView} from 'react-native-gesture-handler';

import carrinhoAPI  from '../redux/api/carrinhoAPI';
import loaderAction  from '../redux/actions/LoaderAction';
import { color } from 'react-native-reanimated';
import { th } from 'date-fns/locale';

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: '#DCDCDC',
    borderWidth: 1
  },
  textArea: {
    height: 135,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#DCDCDC',
    fontSize: 16,
    borderWidth: 1,
  }
})

class Avaliacao extends React.Component {
  constructor(props) {
    super(props);
    
    let pedidoAvaliacao = Object.create(this.props.pedido)
    let itens = pedidoAvaliacao.itens.map(i => Object.create(i))
    pedidoAvaliacao.itens = itens

    this.state = {
      quantidade: 1,
      pedidoAvaliacao: pedidoAvaliacao,
      temMudanca: false
    }
  }

  handlerChangeAvaliacaoPedido(campo, valor) {
    let pedido = this.state.pedidoAvaliacao
    if(!pedido.avaliacao) {
      let avaliacao = {
        pedidoId: pedido.id,
        nota: null,
        comentario: null
      }
      pedido.avaliacao = avaliacao
    }
    pedido.avaliacao[campo] = valor
    this.setState({ pedidoAvaliacao: pedido, temMudanca: true })
  }

  existeItensAvaliados() {
    return this.props.pedido.itens.filter(i => i.avaliacao !== null)[0]
  }

  renderizarAvaliacaoPedido() {
    return (
        <Card
          containerStyle={{
            borderColor: '#DCDCDC',
            borderStyle: 'solid',
            borderWidth: 1,
          }}>
          <View style={{borderBottomColor: '#DCDCDC', borderBottomWidth: 1, paddingBottom: 8}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                paddingLeft: 5,
                paddingBottom: 5
              }}>
              Avaliar Pedido
            </Text>
            <Text
              style={{
                fontSize: 12,
                paddingLeft: 15,
                color: '#606060',
                paddingBottom: 5
              }}>
              { this.state.pedidoAvaliacao.data_pedido }
            </Text>
          </View>
          <View style={{borderBottomColor: '#DCDCDC', borderBottomWidth: 1, paddingBottom: 8, paddingTop: 8}}>
            <View style={{paddingBottom: 8}}>
              <Text
                style={{
                fontSize: 14,
                paddingLeft: 5,
                color: '#606060'}}> 
                { 
                  this.state.pedidoAvaliacao.itens.map(item =>'x' + item.quantidade + ' ' + item.nome).join(', ')
                }
              </Text>
            </View>
            <View style={{paddingBottom: 8}}>
              <Text
                style={{
                  fontSize: 14,
                  paddingLeft: 5,
                  color: '#606060'
                }}>
                Total: R$ { this.state.pedidoAvaliacao.valor_total }
              </Text>
            </View>
          </View>
          <View style={{paddingBottom: 15, paddingTop: 15}}>
            <Rating 
              imageSize={30} 
              fractions={1}
              readonly={this.props.pedido.avaliacao != null || this.existeItensAvaliados()}
              startingValue={this.state.pedidoAvaliacao.avaliacao ? this.state.pedidoAvaliacao.avaliacao.nota : 0} 
              onFinishRating={(nota) => this.handlerChangeAvaliacaoPedido('nota', nota) }/>
            <Text
              style={{
              fontSize: 17,
              paddingLeft: 5,
              marginTop: 15}}> 
              Escreva um comentário
            </Text>                
            <View style={{paddingTop: 15}}>
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Comentário"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
                onChange={(e) => this.handlerChangeAvaliacaoPedido('comentario', e.target.value) }
                disabled={this.props.pedido.avaliacao != null || this.existeItensAvaliados()}
                value={this.state.pedidoAvaliacao.avaliacao ? this.state.pedidoAvaliacao.avaliacao.comentario : ''}
              />
            </View>
          </View>
        </Card>
    )
  }

  handlerChangeAvaliacaoProduto(campo, valor, item) {
    let pedido = this.state.pedidoAvaliacao
    if(!item.avaliacao) {
      let avaliacao = {
        produtoId: item.id,
        pedidoId: pedido.id,
        nota: null
      }
      item.avaliacao = avaliacao
    }
    item.avaliacao[campo] = valor
    this.setState({ pedidoAvaliacao: pedido, temMudanca: true})
  }

  renderizarAvaliacaoProduto(item) {
    return (
      <View>
        <View style={{borderBottomColor: '#DCDCDC', borderBottomWidth: 1, paddingBottom: 8, paddingTop: 8}}>
          <Text
            style={{
            fontSize: 14,
            paddingLeft: 5,
            color: '#606060' }}>
            { 'x' + item.quantidade + ' ' + item.nome + (item.observacoes ? ' - ' + item.observacoes : '')}
          </Text>
        </View>
        <View style={{paddingBottom: 15, paddingTop: 15}}>
          <Rating 
            imageSize={30} 
            fractions={1} 
            startingValue={item.avaliacao ? item.avaliacao.nota : 0} 
            readonly={this.props.pedido.avaliacao != null || this.existeItensAvaliados()}
            onFinishRating={(nota) => this.handlerChangeAvaliacaoProduto('nota', nota, item)} />
        </View>
      </View>
    )
  }
  renderizarAvaliacaoProdutos() {
    return (
        <Card
          containerStyle={{
            borderColor: '#DCDCDC',
            borderStyle: 'solid',
            borderWidth: 1,
          }}>
          <View style={{borderBottomColor: '#DCDCDC', borderBottomWidth: 1, paddingBottom: 8}}>
            <Text
              style={{
              fontSize: 18,
              fontWeight: 'bold',
              paddingLeft: 5,
            }}>
              Avaliar Produtos
            </Text>
        </View>          
          { this.state.pedidoAvaliacao.itens.map(i => this.renderizarAvaliacaoProduto(i))}
        </Card>
    )
  }

  avaliarPedidos() {
    let { pedidoAvaliacao } = this.state
    let avaliacaoPedido = pedidoAvaliacao.avaliacao
    let avaliacaoProdutos = pedidoAvaliacao.itens.filter(item => item.avaliacao != null).map(item => item.avaliacao)

    avaliacaoProdutos.map(a => this.props.avaliarProdutoPedido(a)) 
    this.props.avaliarPedido(avaliacaoPedido)
  
    let pedido = this.props.pedido
    pedido = pedidoAvaliacao

    this.setState({ pedido: pedido})

    Actions.order();
  }

  render() {
    return (
      <View>
        <ScrollView style={{marginBottom: 10}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              paddingLeft: 5,
              marginLeft: 20,
            }}>
            Avaliações
          </Text>
          { this.renderizarAvaliacaoPedido() }
          { this.renderizarAvaliacaoProdutos() }
          <Button
            buttonStyle={{
              backgroundColor: '#f00',
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
            title="Avaliar"
            type="solid"
            disabled={this.props.pedido.avaliacao != null || this.existeItensAvaliados() || !this.state.temMudanca}
            onPress={() => this.avaliarPedidos()}
          />
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
    avaliarPedido: (avaliacaoPedido) => {
      dispatch(carrinhoAPI.avaliarPedido(avaliacaoPedido));
    },
    avaliarProdutoPedido: (avaliacaoProduto) => {
      dispatch(carrinhoAPI.avaliarProdutoPedido(avaliacaoProduto));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Avaliacao);
