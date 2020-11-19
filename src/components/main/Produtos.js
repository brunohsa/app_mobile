import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text, Card, Divider} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

class Produtos extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { item } = this.props
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            Actions.product({prodId: item.id});
          }}
          pointerEvents="none">
          <View>
            <Card key={item.id} style={{marginHorizontal: 12}}>
              <Text style={{color: '#000000', fontSize: 18}}>
                {item.nome}
              </Text>
              <Text
                style={{
                  color: '#7a7a7a',
                  fontSize: 13,
                  marginTop: 5,
                  marginHorizontal: 7,
                }}>
                {item.descricao}
              </Text>
              <View style={{position: 'absolute', right: item.nota ? 16 : 8}}>
                <Text style={{color: '#d4af37', fontSize: 15}}>
                  <Icon name="star" size={15} color="#d4af37" />
                  { item.nota ?  ' ' + item.nota : ' Novo' }
                </Text>
              </View>
              <View>
                <Text style={{color: '#ff0000', fontSize: 15, marginTop: 7}}>
                  R$ {item.valor}
                </Text>
                <View style={{width: '20%', height: '200%', position: 'absolute', right: 0, top: -20}}>
                  <Image source={{uri: item.url}} style={{width: '100%', height: '100%'}} />
                </View>
              </View>
            </Card>
          </View>
          <Divider />
        </TouchableOpacity>
    </View>
    )
  }

}
export default Produtos;
