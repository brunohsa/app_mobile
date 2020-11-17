import React, {Component} from 'react';
import { connect } from 'react-redux'
import {SafeAreaView, View, Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import Categoria from './Categorias';
import {ScrollView} from 'react-native-gesture-handler';
import Produtos from './Produtos';

import cardapioAPI  from '../redux/api/cardapioAPI';
import loaderAction  from '../redux/actions/LoaderAction'

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.props.buscarMelhoresAvaliadosDaRegiao(-22.894114, -47.177018)
  }

  renderCategorias() {
    return <View />;
  }

  render() {
    let { cardapioStore, loaderStore } = this.props
    let melhoresDaRegiao = cardapioStore.melhoresDaRegiao ? cardapioStore.melhoresDaRegiao : []

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
      <SafeAreaView
        style={{position: 'relative', marginLeft: 7, marginRight: 7}}>
        <ScrollView>
          <View style={{position: 'relative'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingLeft: 5,
                paddingBottom: 9,
              }}>
              Categorias
            </Text>
          </View>
          <Categoria />
          <View style={{position: 'relative', paddingBottom: 10}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingLeft: 5,
                marginBottom: 9,
              }}>
              Tops da região
            </Text>
            {
              melhoresDaRegiao && melhoresDaRegiao.length > 0 ? melhoresDaRegiao.map(item => <Produtos item={item} />) : <View />
            }
          </View>
        </ScrollView>
      </SafeAreaView>
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
    buscarMelhoresAvaliadosDaRegiao: (latitude, longitude) => {
      dispatch(loaderAction.startLoader())
      dispatch(cardapioAPI.buscarMelhoresAvaliadosDaRegiao(latitude, longitude));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);