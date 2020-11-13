import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {
  Text,
  Card,
  Divider,
  ThemeProvider,
  Header,
  SearchBar,
} from 'react-native-elements';
import {Chip, ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {ScrollView} from 'react-native-gesture-handler';
import Categorias from './Categorias';
import Produtos from './Produtos';

class Busca extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearching: true,
      isLoading: false,
      search: '',
      dataSource: null,
      lojasSource: null,
    };

    this.arrayholder = [];
  }

  //192.168.15.27
  //192.168.15.72
  async getCardapio() {
    var url = 'http://192.168.15.27:3001/cardapio/';
    await axios
      .get(url)
      .then(responseJson => {
        this.setState(
          {isSearching: false, dataSource: responseJson},
          function() {
            this.arrayholder = responseJson.data;
          },
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderHistoricoPesquisa() {
    return <View />;
  }

  renderFiltros() {
    return (
      <View>
        <Chip onPress={console.log('nome')}>Nome</Chip>
        <Chip onPress={console.log('preço')}>Preço</Chip>
        <Chip onPress={console.log('nota')}>Nota</Chip>
      </View>
    );
  }

  componentDidMount() {
    this.setState({isLoading: true});
    let urlProdutos = 'http://192.168.15.72:3001/produto/';
    let urlLojas = 'http://192.168.15.72:3001/cardapio/';
    Promise.all([fetch(urlProdutos), fetch(urlLojas)])
      .then(([resp1, resp2]) => Promise.all([resp1.json(), resp2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          dataSource: data1,
          lojasSource: data2,
          isLoading: false,
        }),
      )
      .catch(err => {
        console.log(err);
      });
  }

  search = text => {
    console.log(text);
  };

  clear = () => {
    this.search.clear();
  };

  updateSearch(text) {
    this.setState({
      isSearching: true,
      search: text,
    });
    this.getCardapio();
  }

  renderSearchBar() {
    return (
      <SearchBar
        placeholder="Digite sua busca..."
        onChangeText={text => this.updateSearch(text)}
        lightTheme
        round
        containerStyle={{backgroundColor: '#ffffff'}}
        searchIcon={<Icon name="search" color="#7a7a7a" size={20} />}
        value={this.state.search}
      />
    );
  }

  renderCategorias() {
    return (
      <View>
        <Categorias />
      </View>
    );
  }

  renderError() {
    return (
      <View>
        <Text> Erro ao carregar as informações da página. </Text>
      </View>
    );
  }

  renderLoading() {
    return <ActivityIndicator animating={!this.state.isLoading} />;
  }

  render() {
    return (
      <ThemeProvider>
        <View style={{position: 'relative'}}>
          <ScrollView>
            <View style={{position: 'relative'}}>{this.renderSearchBar()}</View>
            <View style={{position: 'relative', marginBottom: 15}}>
              {this.state.dataSource !== null
                ? this.state.dataSource.map(item => <Produtos item={item} />)
                : this.renderCategorias()}
            </View>
          </ScrollView>
        </View>
      </ThemeProvider>
    );
  }
}

export default Busca;
