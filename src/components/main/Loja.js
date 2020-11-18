import React, {Component} from 'react';
import { connect } from 'react-redux'

import {View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

import Produtos from './Produtos';

import cardapioAPI  from '../redux/api/cardapioAPI';
import loaderAction  from '../redux/actions/LoaderAction'

import config from '../redux/config'

class Loja extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.buscarCardapio(this.props.fornecedorUUID);
  }

  render() {
    let { cardapioStore, loaderStore } = this.props

    let url = config.URL_MS_DOWLOAD_IMAGEM_FORNECEDOR.replace('%s', this.props.fornecedorUUID) + '?time=' + new Date();
    let cardapio = cardapioStore.cardapio ? cardapioStore.cardapio : null

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
      <View style={{flex: 1}}>
          <View style={{width: '100%', height: '25%', marginBottom: 10}}>
            <Image source={{uri: url}} style={{width: '100%', height: '100%'}} />
          </View>
          <ScrollView>
          {
            cardapio 
            ? cardapio.categorias.map(cat =>
                <View>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 19,
                      fontWeight: 'bold',
                      paddingLeft: 5,
                      marginLeft: 20,
                    }}>
                    {cat.titulo}
                  </Text>
                  { cat.produtos.map(prod => <Produtos item={prod} /> ) }
                <View />
                </View>
              )
            : <View />        
          }
        </ScrollView>
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
    buscarCardapio: (fornecedorUUID) => {
      dispatch(loaderAction.startLoader())
      dispatch(cardapioAPI.buscarCardapio(fornecedorUUID));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loja);