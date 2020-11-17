import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
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
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#ff0000', fontSize: 15, marginTop: 7}}>
                  R$ {item.valor}
                </Text>
                <View style={{marginLeft: '75%'}}>
                  <Text style={{color: '#d4af37', fontSize: 15, marginTop: 7}}>
                    <Icon name="star" size={15} color="#d4af37" />
                    {item.nota}
                  </Text>
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
