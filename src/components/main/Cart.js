import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      carrinho: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    let url = 'http://192.168.15.72:3001/carrinho/';
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
    return (
      <View>
        {this.state.carrinho.map((item, i) => {
          <View key={item.id}>
            <Text>{item.nome}</Text>
            <Text>{item.observacoes}</Text>
            <Text>{item.quantidade}</Text>
            <Text>{item.valor}</Text>
          </View>;
        })}
      </View>
    );
  }
}

export default Cart;
