import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Text,
  Button,
  Input,
  ThemeProvider,
  Card
} from 'react-native-elements';
import axios from 'axios';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class Cart extends React.Component {
    constructor(props){
        super(props);
    }

<<<<<<< Updated upstream
    //Pegar valores da session storage

    

    render(){
        return(
            <View>

            </View>
        );
    }
=======
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
>>>>>>> Stashed changes
}

export default Cart;