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
    <View>
      <ScrollView>
        {categorias.map(categoria => {
          return (
            <TouchableOpacity>
              <Card key={categoria.id} style={{width: '40%'}}>
                <Card.Cover source={categoria.src} />
                <Card.Content>
                  <Text>{categoria.titulo}</Text>
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
