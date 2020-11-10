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
import {Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {ScrollView} from 'react-native-gesture-handler';
import Categorias from './Categorias';

class Busca extends Component {
  constructor(props) {
    super(props);

    this.state = {isSearching: true, search: ''};

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
    this.getCardapio();
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

  renderItens() {
    if (this.arrayholder.length != 0) {
      return (
        <View>
          <View style={{marginHorizontal: 8}}>
            {this.arrayholder.map(function(item) {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      Actions.product({prodId: item.id});
                    }}
                    pointerEvents="none">
                    <Card>
                      <View key={item.id} style={{marginHorizontal: 12}}>
                        <Text h2Style style={{color: '#000000', fontSize: 18}}>
                          {item.nome}
                        </Text>
                        <Text
                          h4Style
                          style={{
                            color: '#7a7a7a',
                            fontSize: 13,
                            marginTop: 5,
                            marginHorizontal: 7,
                          }}>
                          {item.descricao}
                        </Text>
                        <Text
                          h3Style
                          style={{
                            color: '#ff0000',
                            fontSize: 15,
                            marginTop: 7,
                          }}>
                          {item.valor}
                        </Text>
                      </View>
                    </Card>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Categorias />
        </View>
      );
    }
  }

  render() {
    return (
      <ThemeProvider>
        <View style={{position: 'relative'}}>
          <ScrollView>
            <View style={{position: 'relative'}}>{this.renderSearchBar()}</View>
            <View style={{position: 'relative', marginBottom: 15}}>
              {this.renderItens()}
            </View>
          </ScrollView>
        </View>
      </ThemeProvider>
    );
  }
}

export default Busca;
