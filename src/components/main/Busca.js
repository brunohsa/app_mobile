import React, {Component} from 'react';
import { connect } from 'react-redux'
import {View, TouchableOpacity} from 'react-native';
import {Text, SearchBar} from 'react-native-elements';
import {Chip, ActivityIndicator, Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import Produtos from './Produtos';
import LojaHelper from './LojaHelper';

import cardapioAPI  from '../redux/api/cardapioAPI';
import fornecedorAPI  from '../redux/api/fornecedorAPI';
import loaderAction  from '../redux/actions/LoaderAction'

class Busca extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSourceMaster: null,
      isSearching: true,
      isLoading: false,
      search: '',
      dataSource: null,
      lojasSource: null,
      produtos: null,
      index: 1,
      produtosFiltrados: null,
      fornecedoresFiltrados: null,
      buscandoProdutos: false,
      buscandoLojas: false
    };
  }

  componentDidMount() {
    let { index, buscandoProdutos } = this.state
    if (!buscandoProdutos && index == 1) {
      this.setState({ buscandoProdutos: true })
      this.props.buscarProdutosDaRegiao(-22.894114, -47.177018);
    }
  }

  componentDidUpdate() {
    let { index, buscandoLojas } = this.state
    if (!buscandoLojas && index == 2) {
      this.setState({ buscandoLojas: true })
      this.props.buscarFornecedores(-22.894114, -47.177018);
    }
  }

  ordernarPorNome() {
    let { cardapioStore, fornecedorStore } = this.props

    if(this.state.index == 1) {
      let listaOrdenada = cardapioStore.produtosRegiao.sort((item1, item2) => item1.nome.localeCompare(item2.nome))
      this.setState({ produtosFiltrados: listaOrdenada })
    } else {
      let listaOrdenada = fornecedorStore.fornecedores.sort((item1, item2) => item1.razao_social.localeCompare(item2.razao_social))
      this.setState({ fornecedoresFiltrados: listaOrdenada })
    }    
  }

  ordernarPorPreco() {
    let { cardapioStore } = this.props

    if(this.state.index == 1) {
      let listaOrdenada = cardapioStore.produtosRegiao.sort((item1, item2) => item1.valor - item2.valor)
      this.setState({ produtosFiltrados: listaOrdenada })
    }    
  }

  ordernarPorNota() {
    let { cardapioStore } = this.props

    if(this.state.index == 1) {
      let listaOrdenada = cardapioStore.produtosRegiao.sort((item1, item2) => item2.nota - item1.nota)
      this.setState({ produtosFiltrados: listaOrdenada })
    }    
  }

  renderFiltros() {
    return (
      <View style={{flexDirection: 'row', marginBottom: 15, marginTop: 10}}>
        <Chip
          style={{
            backgroundColor: '#fff',
            color: '#fff',
            width: '25%',
            marginLeft: '7%',
            mode: 'outlined',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#f00',
            alignContent: 'center',
          }}
          icon="food-fork-drink"
          onPress={() => this.ordernarPorNome()}>
          Nome
        </Chip>
        <Chip
          style={{
            backgroundColor: '#fff',
            color: '#fff',
            width: '25%',
            marginLeft: '7%',
            mode: 'outlined',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#f00',
            alignContent: 'center',
          }}
          icon="cash-usd"
          onPress={() => this.ordernarPorPreco()}>
          Preço
        </Chip>
        <Chip
          style={{
            backgroundColor: '#fff',
            color: '#fff',
            width: '25%',
            marginLeft: '7%',
            mode: 'outlined',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#f00',
            alignContent: 'center',
          }}
          icon="star"
          onPress={() => this.ordernarPorNota()}>
          Nota
        </Chip>
      </View>
    );
  }

  renderTabBar() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => this.setState({index: 1})}>
          <Text
            style={{
              color: '#ff0000',
              fontSize: 15,
              marginTop: 7,
              marginLeft: '30%',
              left: '50%',
            }}>
            Itens
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({index: 2})}>
          <Text
            style={{
              color: '#ff0000',
              fontSize: 15,
              marginTop: 7,
              marginLeft: '15%',
              left: '50%',
            }}>
            Lojas
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  search = text => {
    console.log(text);
  };

  clear = () => {
    this.search.clear();
  };

  updateSearch(text) {
    if (text) {
      const data = this.state.dataSource.filter(item => {
        const itemData = item.nome ? item.nome.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({dataSource: data, search: text});
    } else {
      this.setState({dataSource: this.state.dataSourceMaster, search: text});
    }
  }

  renderSearchBar() {
    return (
      <SearchBar
        placeholder="Digite sua busca..."
        onChangeText={text => this.updateSearch(text)}
        onClear={text => this.updateSearch('')}
        lightTheme
        round
        containerStyle={{backgroundColor: '#ffffff'}}
        searchIcon={<Icon name="search" color="#7a7a7a" size={20} />}
        value={this.state.search}
      />
    );
  }

  renderError() {
    return (
      <View>
        <Text> Erro ao carregar as informações da página. </Text>
      </View>
    );
  }

  renderItens() {
    let { cardapioStore } = this.props
    let { produtosFiltrados } = this.state
    let produtos = produtosFiltrados ? produtosFiltrados : cardapioStore.produtosRegiao ? cardapioStore.produtosRegiao : []

    return (
      <View style={{position: 'relative', marginBottom: 15}}>
        { produtos && produtos.length > 0
            ? produtos.map(item => <Produtos item={item} />)
            : <View />
        }
      </View>
    );
  }

  renderLojas() {
    let { fornecedorStore } = this.props
    let lojas = fornecedorStore.fornecedores ? fornecedorStore.fornecedores : []
    return (
      <View style={{position: 'relative', marginBottom: 15}}>
        { 
          lojas && lojas.length > 0 ?
            lojas.map(loja => <LojaHelper loja={loja} />)
          : <View />
        }
      </View>
    );
  }

  render() {
    let { loaderStore } = this.props
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
      <View style={{position: 'relative'}}>
        <ScrollView>
          <View style={{position: 'relative'}}>{this.renderSearchBar()}</View>
          <View>{this.renderFiltros()}</View>
          <View>{this.renderTabBar()}</View>
          {this.state.index == 1 ? this.renderItens() : this.renderLojas()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardapioStore: state.cardapio,
    fornecedorStore: state.fornecedor,
    loaderStore: state.loader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buscarProdutosDaRegiao: (latitude, longitude) => {
      dispatch(loaderAction.startLoader())
      dispatch(cardapioAPI.buscarProdutosDaRegiao(latitude, longitude));
    },
    buscarFornecedores: (latitude, longitude) => {
      dispatch(loaderAction.startLoader())
      dispatch(fornecedorAPI.buscarFornecedores(latitude, longitude));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Busca);