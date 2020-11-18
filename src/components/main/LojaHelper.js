import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text, Card, Divider} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

import config from '../redux/config';

const LojaHelper = props => {

  function getDistanciaFormatada(distancia) {
    if(distancia < 1) {
        return `${(distancia * 1000).toFixed(2)} metros`
    }
    return `${distancia.toFixed(2)} km`
  }

  let url = config.URL_MS_DOWLOAD_IMAGEM_FORNECEDOR.replace('%s', props.loja.cadastro_uuid) + '?time=' + new Date();
  
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Actions.loja({fornecedorUUID: props.loja.cadastro_uuid});
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
              { getDistanciaFormatada(props.loja.distancia) }
            </Text>
            <Text
              h3Style
              style={{color: '#ff0000', fontSize: 15, marginTop: 7}}>
              {props.loja.funcionamento.abertura} -{' '}
              {props.loja.funcionamento.fechamento}
            </Text>
            <View style={{width: '25%', height: '100%', flexDirection: 'row', position: 'absolute', right: 0}}>
              <Image source={{uri: url}} style={{width: '100%', height: '100%'}} />
            </View>
          </Card>
        </View>
        <Divider />
      </TouchableOpacity>
    </View>
  );
};

export default LojaHelper;
