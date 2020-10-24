import React, {Component} from 'react';
import {
  View,
  Image
} from 'react-native';
import {
  Text
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
                      "Comida Arabe",
                      "Combos",
                      "Bebidas",
                      "Caldos",
                      "Outros"];
  console.log(categorias);
  return (
    <View>
      {categorias.map(element => {
        var cat = element.trim();
        console.log(cat);
        var x = x ? "" : "";
        return(
          <View>
            <Image source={require(`../../static/images/icones/bebidas.png`)} />
            <Text>{element}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default Categoria;
