import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Card, Divider} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

const Produtos = props => {
  console.log(props.item.id);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Actions.product({prodId: props.item.id});
        }}
        pointerEvents="none">
        <View>
          <Card key={props.item.id} style={{marginHorizontal: 12}}>
            <Text h2Style style={{color: '#000000', fontSize: 18}}>
              {props.item.nome}
            </Text>
            <Text
              h4Style
              style={{
                color: '#7a7a7a',
                fontSize: 13,
                marginTop: 5,
                marginHorizontal: 7,
              }}>
              {props.item.descricao}
            </Text>
            <Text
              h3Style
              style={{color: '#ff0000', fontSize: 15, marginTop: 7}}>
              {props.item.valor}
            </Text>
          </Card>
        </View>
        <Divider />
      </TouchableOpacity>
    </View>
  );
};

export default Produtos;
