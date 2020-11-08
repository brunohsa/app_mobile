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
import Categoria from './Categorias';

class Loja extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  render() {
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
    }
  }
}

export default Loja;
