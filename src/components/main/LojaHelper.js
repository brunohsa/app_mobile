import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Card, Divider} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';


const LojaHelper = props => {
  return(
    <View>
      <TouchableOpacity
        onPress={() => {
          Actions.product({prodId: props.loja.cadastro_uuid});
        }}
        pointerEvents="none">
        <View>
          <Card key={props.loja.cadastro_uuid} style={{marginHorizontal: 12}}>
            <Text h2Style style={{color: '#000000', fontSize: 18}}>
              {props.loja.razao_social}
            </Text>
            <Text
              h4Style
              style={{
                color: '#7a7a7a',
                fontSize: 13,
                marginTop: 5,
                marginHorizontal: 7,
              }}>
              {props.loja.distancia}
            </Text>
            <Text
              h3Style
              style={{color: '#ff0000', fontSize: 15, marginTop: 7}}>
                {props.loja.funcionamento.abertura} - {props.loja.funcionamento.fechamento} 
            </Text>
          </Card>
        </View>
        <Divider />
      </TouchableOpacity>
    </View>
  );
};

export default LojaHelper;
