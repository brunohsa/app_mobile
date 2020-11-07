import React, {Component} from 'react';
import {View, Image, FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import {Card} from 'react-native-paper';
import {Button, TextInput} from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
function Categoria() {
  const categorias = [
    {
      titulo: 'Lanches',
      src: require('../../images/categorias/lanches.jpg'),
    },
    {
      titulo: 'Bolos e Doces',
      src: require('../../images/categorias/bolosedoces.jpg'),
    },
    {
      titulo: 'Pizza',
      src: require('../../images/categorias/pizza.jpg'),
    },
    {
      titulo: 'Comida Brasileira',
      src: require('../../images/categorias/comidabrasileira.jpg'),
    },
    {
      titulo: 'Comida Italiana',
      src: require('../../images/categorias/comidaitaliana.jpg'),
    },
    {
      titulo: 'Comida Chinesa',
      src: require('../../images/categorias/comidachinesa.jpg'),
    },
    {
      titulo: 'Comida Árabe',
      src: require('../../images/categorias/comidaarabe.jpg'),
    },
    {
      titulo: 'Combos',
      src: require('../../images/categorias/combos.jpg'),
    },
    {
      titulo: 'Bebidas',
      src: require('../../images/categorias/bebidas.jpg'),
    },
    {
      titulo: 'Caldos',
      src: require('../../images/categorias/caldos.jpg'),
    },
    {
      titulo: 'Outros',
      src: require('../../images/categorias/outros.jpg'),
    },
  ];

  return (
    <View>
      <FlatList numColumns={2}>
        {categorias.map((categoria, i) => {
          return (
            <Card key={i} style={{width: '40%'}}>
              <Card.Cover source={categoria.src} />
              <Card.Content>
                <Text>{categoria.titulo}</Text>
              </Card.Content>
            </Card>
          );
        })}
      </FlatList>
    </View>
  );
}

export default Categoria;
