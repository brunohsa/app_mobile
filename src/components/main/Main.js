import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import Categoria from './Categorias';
import {ScrollView} from 'react-native-gesture-handler';
import Produtos from './Produtos';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: null,
      isLoading: false,
    };
  }

  //192.168.15.27
  //192.168.15.72
  componentDidMount() {
    this.setState({isLoading: true});
    let url = 'http://192.168.0.44:3001/produto/';
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

  renderCategorias() {
    return <View />;
  }

  render() {
    if (this.state.isLoading) {
      <View style={{flex: 1, justifyContent: 'center', alingItens: 'center'}}>
        <ActivityIndicator
          animating={true}
          color={Colors.red200}
          size="large"
        />
      </View>;
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
          <View style={{position: 'relative'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingLeft: 5,
                marginBottom: 9,
              }}>
              Tops da região
            </Text>
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
