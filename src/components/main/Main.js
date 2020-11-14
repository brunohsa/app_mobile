import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {Card, Divider, ActivityIndicator, Colors} from 'react-native-paper';
import axios from 'axios';
import Categoria from './Categorias';
import {Actions} from 'react-native-router-flux';
import {ScrollView} from 'react-native-gesture-handler';
import Produtos from './Produtos';
import FABCart from './FABCart';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: null,
      isLoading: false,
    };

    this.arrayholder = [];
  }

  //192.168.15.27
  //192.168.15.72
  componentDidMount() {
    this.setState({isLoading: true});
    let url = 'http://192.168.15.72:3001/produto/';
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({dataSource: json, isLoading: false});
        return json;
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderFavs() {
    return <View />;
  }

  render() {
    if (this.state.isLoading) {
      <View>
        <ActivityIndicator animating={true} color={Colors.red200} />
      </View>;
    }
    return (
      <SafeAreaView style={{position: 'relative'}}>
        <ScrollView>
          <View style={{position: 'relative'}}>
            <Text>Categorias</Text>
            <Categoria />
          </View>
          <View style={{position: 'relative'}}>
            <Text>Tops da região</Text>
            {this.state.dataSource !== null ? (
              this.state.dataSource.map(item => <Produtos item={item} />)
            ) : (
              <View />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default MainPage;
