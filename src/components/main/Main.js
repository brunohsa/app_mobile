import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import axios from 'axios';
import Categoria from './Categorias';
import {Actions} from 'react-native-router-flux';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };

    this.arrayholder = [];
  }

  //192.168.15.27
  //192.168.15.72
  async getProduct() {
    let url = 'http://192.168.15.200:3001/cardapio/';
    const response = await axios.config(url).catch(err => {
      console.log(err);
    });
    const {data} = response;
    let toJSON = JSON.parse(data);
    console.log(toJSON);
    this.setState({dataSource: toJSON});
  }

  componentDidMount() {
    this.getProduct();
  }

  renderTops() {
    console.log(this.state.dataSource);
    this.state.dataSource.produtos.sort(function(a, b) {
      return a.nota - b.nota;
    });
    return (
      <View>
        {this.state.dataSource.map(function(item) {
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
                      style={{color: '#ff0000', fontSize: 15, marginTop: 7}}>
                      {item.valor}
                    </Text>
                  </View>
                </Card>
                <Divider />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }

  renderFavs() {
    return <View />;
  }

  renderCategorias() {
    return <View />;
  }

  render() {
    return (
      <SafeAreaView style={{position: 'relative'}}>
        <View style={{position: 'relative'}}>
          <Text>Categorias</Text>
          <Categoria />
        </View>
        <View style={{position: 'relative'}}>
          <Text>Tops da região</Text>
          {this.renderTops()}
        </View>
      </SafeAreaView>
    );
  }
}

export default MainPage;
