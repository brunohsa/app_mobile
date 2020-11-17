import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, SearchBar} from 'react-native-elements';
import {Chip, ActivityIndicator, Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import Produtos from './Produtos';
import LojaHelper from './LojaHelper';

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
      index: 1,
    };
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
          onPress={() => console.log('nome')}>
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
          onPress={() => console.log('preço')}>
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
          onPress={() => console.log('nota')}>
          Nota
        </Chip>
      </View>
    );
  }

  //192.168.15.27
  //192.168.15.72
  componentDidMount() {
    this.setState({isLoading: true});
    let urlProdutos = 'http://192.168.15.72:3001/produto/';
    let urlLojas = 'http://192.168.15.72:3001/fornecedor/';
    Promise.all([fetch(urlProdutos), fetch(urlLojas)])
      .then(([resp1, resp2]) => Promise.all([resp1.json(), resp2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          dataSource: data1,
          dataSourceMaster: data1,
          lojasSource: data2,
          isLoading: false,
        }),
      )
      .catch(err => {
        console.log(err);
      });
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
    return (
      <View style={{position: 'relative', marginBottom: 15}}>
        {this.state.dataSource !== null ? (
          this.state.dataSource.map(item => <Produtos item={item} />)
        ) : (
          <View />
        )}
      </View>
    );
  }

  renderLojas() {
    return (
      <View style={{position: 'relative', marginBottom: 15}}>
        {this.state.lojasSource !== null ? (
          this.state.lojasSource.map(loja => <LojaHelper loja={loja} />)
        ) : (
          <View />
        )}
      </View>
    );
  }

  render() {
    if (this.state.isLoading) {
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

export default Busca;
