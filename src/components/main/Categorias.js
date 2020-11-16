import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {Card} from 'react-native-paper';
function Categoria() {
  const categorias = [
    {
      id: '5f8cc90b3c060f87fc52c9e4',
      titulo: 'Lanches',
      src: require('../../images/categorias/lanches.jpg'),
    },
    {
      id: '5f8cc90b3c060f87fc52c9e6',
      titulo: 'Bolos e Doces',
      src: require('../../images/categorias/bolosedoces.jpg'),
    },
    {
      id: '5f8cc90b3c060f87fc52c9e7',
      titulo: 'Pizza',
      src: require('../../images/categorias/pizza.jpg'),
    },
    {
      id: '5f8cc90b3c060f87fc52c9ea',
      titulo: 'Comida Japonesa',
      src: require('../../images/categorias/pizza.jpg'),
    },
    {
      id: '5f8cc90b3c060f87fc52c9e8',
      titulo: 'Comida Brasileira',
      src: require('../../images/categorias/comidabrasileira.jpg'),
    },
    {
      id: '5f8cc90b3c060f87fc52c9e9',
      titulo: 'Comida Italiana',
      src: require('../../images/categorias/comidaitaliana.jpg'),
    },
    {
      id: '5f8cc90b3c060f87fc52c9eb',
      titulo: 'Comida Chinesa',
      src: require('../../images/categorias/comidachinesa.jpg'),
    },
    {
      id: '5f8cc90b3c060f87fc52c9ec',
      titulo: 'Comida Árabe',
      src: require('../../images/categorias/comidaarabe.jpg'),
    },
    {
      id: '5f8cc90b3c060f87fc52c9ed',
      titulo: 'Combos',
      src: require('../../images/categorias/combos.jpg'),
    },
    {
      id: '5f8cc90b3c060f87fc52c9e5',
      titulo: 'Bebidas',
      src: require('../../images/categorias/bebidas.jpg'),
    },
    {
      id: '5f8cc90b3c060f87fc52c9ee',
      titulo: 'Caldos',
      src: require('../../images/categorias/caldos.jpg'),
    },
    {
      id: '5f8cc90b3c060f87fc52c9ef',
      titulo: 'Outros',
      src: require('../../images/categorias/outros.jpg'),
    },
  ];

  return (
    <View style={{flex:1}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginLeft:7,marginRight:7,bottom:-5,marginBottom:-30}}
        >
        {categorias.map(categoria => {
          return (
            <TouchableOpacity style={{marginLeft:7}}>
              <Card
                key={categoria.id}
                style={{
                  elevation:0,
                  maxWidth: '50%',
                  maxHeight: '50%',
                  width: '50%',
                  height: '50%',
                }}>
                <Card.Cover
                  source={categoria.src}
                  style={{
                    maxWidth: 100,
                    maxHeight: 100,
                    width: 100,
                    height: 100,
                  }}
                />
                <Card.Content style={{
                    alignContent: 'center',
                    maxWidth: 100,
                    maxHeight: 100,
                    width: 100,
                    height: 100,}}>
                  <Text style={{fontSize:12}}>{categoria.titulo}</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Categoria;
