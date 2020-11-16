import React, {Component} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {ActivityIndicator, Colors} from 'react-native-paper';
import Produtos from './Produtos';

class Loja extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    let url = 'http://192.168.15.72:3001/cardapio/';
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

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex:1,justifyContent:'center', alingItens:'center'}}>
          <ActivityIndicator animating={true} color={Colors.red200} size='large'/>
        </View>
      );
    }
    console.log(this.state.dataSource);
    return (
      <View>
        {this.state.dataSource !== null ? (
          this.state.dataSource.map(item => (
            <View>
              <Text>{item.nome}</Text>
              {item.categorias.map(cat => (
                <View>
                  <View>
                    <Text>{cat.titulo}</Text>
                  </View>
                  {cat.produtos.map(prod => (
                    <Produtos item={prod} />
                  ))}
                  <View />
                </View>
              ))}
            </View>
          ))
        ) : (
          <View />
        )}
      </View>
    );
  }
}

export default Loja;
