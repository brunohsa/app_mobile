import React, {Component} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Text,
  ThemeProvider,
  Card
} from 'react-native-elements';
import {
  Button,
  TextInput
} from 'react-native-paper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

Categoria = () => {
  const categorias = ["Lanches",
                      "Bolos e Doces",
                      "Pizza",
                      "Comida Brasileira",
                      "Comida Italiana",
                      "Comida Chinesa",
                      "Comida Árabe",
                      "Combos",
                      "Bebidas",
                      "Caldos",
                      "Outros"];

  console.log(categorias);
  return (
    <View>
      {categorias.map(element => {
        return(
          <View>
            <Text>{element}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default Categoria;
