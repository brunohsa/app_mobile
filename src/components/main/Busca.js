import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import {Text, SearchBar} from 'react-native-elements';
import {Chip, ActivityIndicator, Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import Produtos from './Produtos';
import LojaHelper from './LojaHelper';
import {Actions} from 'react-native-router-flux';

import cardapioAPI from '../redux/api/cardapioAPI';
import fornecedorAPI from '../redux/api/fornecedorAPI';
import loaderAction from '../redux/actions/LoaderAction';
import FornecedorAction from '../redux/actions/FornecedorAction';

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
      buscandoLojas: false,
      fornecedoresPorCategoriaFiltrados: []
    };
  }

  componentWillReceiveProps() {
    if(this.props.fornecedorStore.fornecedoresPorCategoria && this.state.index !== 2) {
      this.setState({index: 2})
    } else {
      this.setState({index: 1})
    }
  }

  componentDidMount() {
    let {index, buscandoProdutos} = this.state;
    if (!buscandoProdutos && index == 1) {
      this.setState({buscandoProdutos: true});
      this.props.buscarProdutosDaRegiao(-22.894114, -47.177018);
    }
  }

  componentDidUpdate() {
    let {index, buscandoLojas} = this.state;
    if (!buscandoLojas && index == 2) {
      this.setState({buscandoLojas: true});
      this.props.buscarFornecedores(-22.894114, -47.177018);
    }
  }

  ordernarPorNome() {
    let {cardapioStore, fornecedorStore} = this.props;

    if (this.state.index == 1) {
        let produtos = cardapioStore.produtosFiltrados ? cardapioStore.produtosFiltrados : cardapioStore.produtosRegiao
        let listaOrdenada = produtos.sort((item1, item2) => item1.nome.localeCompare(item2.nome));
        this.setState({produtosFiltrados: listaOrdenada});
    } else {
        let fornecedores =  fornecedorStore.fornecedoresPorCategoria ? fornecedorStore.fornecedoresPorCategoria.categoria.fornecedores
                          : fornecedorStore.fornecedoresFiltrados ? fornecedorStore.fornecedoresFiltrados 
                          : fornecedorStore.fornecedores
        let listaOrdenada = fornecedores.sort((item1, item2) => item1.razao_social.localeCompare(item2.razao_social));
        this.setState({fornecedoresFiltrados: listaOrdenada});
    }
  }

  ordernarPorPreco() {
    let {cardapioStore} = this.props;
    let produtos = cardapioStore.produtosFiltrados ? cardapioStore.produtosFiltrados : cardapioStore.produtosRegiao
    let listaOrdenada = produtos.sort((item1, item2) => item1.valor - item2.valor);
    this.setState({produtosFiltrados: listaOrdenada});
  }

  
  ordernarPorDistancia() {
    let {fornecedorStore} = this.props;
    let fornecedores =  fornecedorStore.fornecedoresPorCategoria ? fornecedorStore.fornecedoresPorCategoria.categoria.fornecedores
                        : fornecedorStore.fornecedoresFiltrados ? fornecedorStore.fornecedoresFiltrados 
                        : fornecedorStore.fornecedores
    let listaOrdenada = fornecedores.sort((item1, item2) => item1.distancia - item2.distancia);
    this.setState({fornecedoresFiltrados: listaOrdenada});
  }

  ordernarPorNota() {
    let {cardapioStore, fornecedorStore} = this.props;

    if (this.state.index == 1) {
      let produtos = cardapioStore.produtosFiltrados ? cardapioStore.produtosFiltrados : cardapioStore.produtosRegiao
      let listaOrdenada = produtos.sort((item1, item2) => item2.nota - item1.nota);
      this.setState({produtosFiltrados: listaOrdenada});
    } else {
      let fornecedores =  fornecedorStore.fornecedoresPorCategoria ? fornecedorStore.fornecedoresPorCategoria.categoria.fornecedores
                        : fornecedorStore.fornecedoresFiltrados ? fornecedorStore.fornecedoresFiltrados 
                        : fornecedorStore.fornecedores
      let listaOrdenada = fornecedores.sort((item1, item2) => item2.nota - item1.nota);
      this.setState({fornecedoresFiltrados: listaOrdenada});
    }
  }

  renderFiltros() {
    return (
      <View style={{flexDirection: 'row', marginBottom: 15, marginTop: 10, justifyContent:'center'}}>
        <Chip
          style={{
            backgroundColor: '#fff',
            color: '#fff',
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
        {
          this.state.index == 1 
          ? <Chip
              style={{
                backgroundColor: '#fff',
                color: '#fff',
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
          : <Chip
              style={{
                backgroundColor: '#fff',
                color: '#fff',
                marginLeft: '7%',
                mode: 'outlined',
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#f00',
                alignContent: 'center',
              }}
              icon="map-marker"
              onPress={() => this.ordernarPorDistancia()}>
              Distância
            </Chip>
        }
        <Chip
          ellipsizeMode="middle"
          style={{
            backgroundColor: '#fff',
            color: '#fff',
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
    let borderBottom1, borderBottom2;
    if (this.state.index === 1) {
      borderBottom1 = 2;
      borderBottom2 = 0;
    } else {
      borderBottom1 = 0;
      borderBottom2 = 2;
    }
    return (
      <View style={{flexDirection: 'row', marginLeft: '8%', marginRight: '5%'}}>
        <TouchableOpacity
          onPress={() => this.setState({index: 1})}
          style={{
            borderBottomColor: '#f00',
            borderBottomWidth: borderBottom1,
            alignItems: 'center',
            width: '40%',
            marginTop: 7,
            marginRight: '15%',
          }}>
          <Text
            style={{
              color: '#ff0000',
              fontSize: 15,
            }}>
            Itens
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({index: 2})}
          style={{
            borderBottomColor: '#f00',
            borderBottomWidth: borderBottom2,
            alignItems: 'center',
            width: '40%',
            marginTop: 7,
          }}>
          <Text
            style={{
              color: '#ff0000',
              fontSize: 15,
            }}>
            Lojas
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  updateSearch(text) {    
    let {fornecedorStore} = this.props;
    if(text && text.trim() && text.length >= 3) {
      if(fornecedorStore.fornecedoresPorCategoria) {
        let filtrados = fornecedorStore.fornecedoresPorCategoria.categoria.fornecedores.filter(f => f.razao_social.includes(text))
        this.setState({fornecedoresPorCategoriaFiltrados: filtrados})
      } else {
        if(this.state.index == 1) {
          this.props.buscarProdutosPorNome(-22.894114, -47.177018, text);
        } else {
          this.props.buscarFornecedoresPorNome(-22.894114, -47.177018, text);
        }
      }
    }
    this.setState({search: text, produtosFiltrados: null, fornecedoresFiltrados: null});
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
    let {cardapioStore} = this.props;
    let {produtosFiltrados, search} = this.state;
    let produtos = produtosFiltrados ? produtosFiltrados 
      : search ? (cardapioStore.produtosFiltrados ? cardapioStore.produtosFiltrados : [])
      : cardapioStore.produtosRegiao ? cardapioStore.produtosRegiao
      : [];

    return (
      <View style={{position: 'relative', marginBottom: 15}}>
        {produtos && produtos.length > 0 ? (
          produtos.map(item => <Produtos item={item} />)
        ) : (
          <View />
        )}
      </View>
    );
  }

  renderizarLojasPorCategoria() {
    let {fornecedorStore} = this.props;
    let {fornecedoresPorCategoriaFiltrados, search} = this.state;

    let filtroPorCategoria = fornecedorStore.fornecedoresPorCategoria
    if(!filtroPorCategoria) {
      return <View />
    }

    let lojas = search ? fornecedoresPorCategoriaFiltrados : filtroPorCategoria.categoria.fornecedores
    return (
      <View style={{width: '100%', height: '100%'}}>
        <View style={{width: '100%', height: 60, borderBottomColor: '#f00', borderBottomWidth: 1}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 15, position: 'relative'}}> 
            { filtroPorCategoria.categoria.titulo }
          </Text>
        </View>
        <View>{this.renderFiltros()}</View>
        <View style={{position: 'relative', marginBottom: 15}}>
          { lojas && lojas.length > 0 ? lojas.map(loja => <LojaHelper loja={loja} />) : <View /> }
        </View>
      </View>
    );
  }

  renderLojas() {
    let {fornecedorStore} = this.props;
    let {fornecedoresFiltrados, search} = this.state;

    let lojas = fornecedoresFiltrados ? fornecedoresFiltrados 
    : search ? (fornecedorStore.fornecedoresFiltrados ? fornecedorStore.fornecedoresFiltrados : [])
    : fornecedorStore.fornecedores ? fornecedorStore.fornecedores
    : [];

    return (
      <View style={{position: 'relative', marginBottom: 15}}>
        {lojas && lojas.length > 0 ? (
          lojas.map(loja => <LojaHelper loja={loja} />)
        ) : (
          <View />
        )}
      </View>
    );
  }

  render() {
    let {loaderStore} = this.props;
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

    let {fornecedorStore} = this.props;
    return (
      <View style={{position: 'relative'}}>
        <ScrollView>
          <View style={{position: 'relative'}}>{this.renderSearchBar()}</View>
          { 
            fornecedorStore.fornecedoresPorCategoria 
            ? this.renderizarLojasPorCategoria()
            : <View>
                <View>{this.renderFiltros()}</View>
                <View>{this.renderTabBar()}</View>
                {this.state.index == 1 ? this.renderItens() : this.renderLojas()}
              </View>
          }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardapioStore: state.cardapio,
    fornecedorStore: state.fornecedor,
    loaderStore: state.loader,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buscarProdutosDaRegiao: (latitude, longitude) => {
      dispatch(loaderAction.startLoader());
      dispatch(cardapioAPI.buscarProdutosDaRegiao(latitude, longitude));
    },
    buscarFornecedores: (latitude, longitude) => {
      dispatch(loaderAction.startLoader());
      dispatch(fornecedorAPI.buscarFornecedores(latitude, longitude));
    },
    buscarProdutosPorNome: (latitude, longitude, nome) => {
      dispatch(cardapioAPI.buscarProdutosPorNome(latitude, longitude, nome));
    },
    buscarFornecedoresPorNome: (latitude, longitude, nome) => {
      dispatch(fornecedorAPI.buscarFornecedoresPorNome(latitude, longitude, nome));
    },
    limparFornecedoresPorCategoria: () => {
      dispatch(FornecedorAction.limparFornecedoresPorCategoria());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Busca);
