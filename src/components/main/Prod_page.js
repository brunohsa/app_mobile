import React, {Component} from 'react';
import { connect } from 'react-redux'
import {View} from 'react-native';
import {Text, Card, Image} from 'react-native-elements';
import {Button, TextInput, ActivityIndicator, Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import cardapioAPI  from '../redux/api/cardapioAPI';
import carrinhoAPI  from '../redux/api/carrinhoAPI';
import loaderAction  from '../redux/actions/LoaderAction';

class Produto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descricao: '', 
      quantidade: 0, 
    };

    this.props.buscarProduto(this.props.prodId);
  }

  aumentarQuantidade() {
    this.setState(prevstate => ({
      quantidade: prevstate.quantidade + 1,
    }));
  }

  diminuirQuantidade() {
    this.setState(prevstate => ({
      quantidade: prevstate > 0 ? prevstate.quantidade - 1 : 0,
    }));
  }

  handlerChange(campo, valor) {
    this.setState({ [campo]: valor })
  }

  adicionarProdutoNoCarrinho() { 
    let { quantidade, descricao } = this.state
    let { cardapioStore } = this.props
    let produto = cardapioStore.produto

    this.props.adicionarProdutoNoCarrinho(produto.cardapio_id, produto.id, quantidade, descricao)
  }

  render() {
    let { cardapioStore, loaderStore } = this.props

    let produto = cardapioStore.produto ? cardapioStore.produto : null
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
      <View style={{justifyContent: 'center'}}>
        <View style={{width: '100%', height: '40%', marginBottom: 10}}>
          <Image source={{uri: produto ? produto.url : null}} style={{width: '100%', height: '100%'}} />
        </View>
        <Card>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000000', fontSize: 18}}>
              { produto ? produto.nome : null }
            </Text>
            <Text
              style={{
                color: '#d4af37',
                fontSize: 15,
                marginTop: 7,
                marginLeft: '75%',
              }}>
              <Icon name="star" size={15} color="#d4af37" />
              { produto ? produto.nota : null }
            </Text>
          </View>
          <Text
            style={{
              color: '#7a7a7a',
              fontSize: 13,
              marginTop: 5,
              marginHorizontal: 7,
            }}>
            { produto ? produto.descricao : null }
          </Text>
          <Text style={{color: '#ff0000', fontSize: 15, marginTop: 7}}>
            R$ { produto ? produto.valor : null }
          </Text>
          <TextInput 
              label="Observações" 
              onChangeText={(text) => this.handlerChange('descricao', text)}
              style={{backgroundColor: '#fff'}} />
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 15}}>
            <Button
              style={{
                borderRadius: 5
              }}
              containerStyle={{position: 'relative'}}
              onPress={() => this.aumentarQuantidade()}
              mode="contained"
            >
              +
            </Button>
            <Text style={{width: 20, alignSelf: 'center', marginLeft: 10}}>
              {this.state.quantidade}
            </Text>
            <Button
              style={{
                borderRadius: 5,
              }}
              containerStyle={{}}
              onPress={() => this.diminuirQuantidade()}
              mode="contained"
            >
              -
            </Button>
          </View>
        </Card>
        <View>
          <Button
            mode="contained"
            onPress={() => this.adicionarProdutoNoCarrinho()}
            style={{
              width: 150,
              alignSelf: 'center',
              padding: 5,
              marginTop: 15,
              borderRadius: 5,
            }}>
            Adicionar
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardapioStore: state.cardapio,
    loaderStore: state.loader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buscarProduto: (id) => {
      dispatch(loaderAction.startLoader())
      dispatch(cardapioAPI.buscarProduto(id));
    },
    adicionarProdutoNoCarrinho: (cardapioId, idProduto, quantidade, observacoes) => {
      dispatch(loaderAction.startLoader())
      dispatch(carrinhoAPI.adicionarProdutoNoCarrinho(cardapioId, idProduto, quantidade, observacoes));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Produto);
