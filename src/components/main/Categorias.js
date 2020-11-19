import React , {Component} from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {Text} from 'react-native-elements';
import {Card} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';

import fornecedorAPI  from '../redux/api/fornecedorAPI';
import loaderAction  from '../redux/actions/LoaderAction';

const categorias = [
  {
    id: 'LANCHES',
    titulo: 'Lanches',
    src: require('../../images/categorias/lanches.jpg'),
  },
  {
    id: 'BOLO_E_DOCES',
    titulo: 'Bolos e Doces',
    src: require('../../images/categorias/bolosedoces.jpg'),
  },
  {
    id: 'PIZZA',
    titulo: 'Pizza',
    src: require('../../images/categorias/pizza.jpg'),
  },
  {
    id: 'JAPONESA',
    titulo: 'Comida Japonesa',
    src: require('../../images/categorias/pizza.jpg'),
  },
  {
    id: 'BRASILEIRA',
    titulo: 'Comida Brasileira',
    src: require('../../images/categorias/comidabrasileira.jpg'),
  },
  {
    id: 'ITALIANA',
    titulo: 'Comida Italiana',
    src: require('../../images/categorias/comidaitaliana.jpg'),
  },
  {
    id: 'CHINESA',
    titulo: 'Comida Chinesa',
    src: require('../../images/categorias/comidachinesa.jpg'),
  },
  {
    id: 'ARABE',
    titulo: 'Comida Árabe',
    src: require('../../images/categorias/comidaarabe.jpg'),
  },
  {
    id: 'COMBOS',
    titulo: 'Combos',
    src: require('../../images/categorias/combos.jpg'),
  },
  {
    id: 'BEBIDAS',
    titulo: 'Bebidas',
    src: require('../../images/categorias/bebidas.jpg'),
  },
  {
    id: 'CALDOS',
    titulo: 'Caldos',
    src: require('../../images/categorias/caldos.jpg'),
  },
  {
    id: 'OUTROS',
    titulo: 'Outros',
    src: require('../../images/categorias/outros.jpg'),
  },
];

class Categoria extends Component {

  buscarFornecedoresPorCategoria(categoria) {
    this.props.buscarFornecedoresPorCategoria(-22.894114, -47.177018, categoria.id, categoria.titulo);
    Actions.search();
  }

  render() { 
    return (
      <View id={new Date()} style={{flex: 1}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginLeft: 7, marginRight: 7, bottom: -5, marginBottom: -30}}>
          {
            categorias.map(categoria => {
              return (
                <TouchableOpacity 
                  style={{marginLeft: 7}}
                  onPress={() => this.buscarFornecedoresPorCategoria(categoria)}>
                  <Card
                    key={categoria.id}
                    style={{
                      elevation: 0,
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
                    <Card.Content
                      style={{
                        alignContent: 'center',
                        maxWidth: 100,
                        maxHeight: 100,
                        width: 100,
                        height: 100,
                      }}>
                      <Text style={{fontSize: 12}}>{categoria.titulo}</Text>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              );
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    carrinhoStore: state.carrinho,
    loaderStore: state.loader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buscarFornecedoresPorCategoria: (lat, long, categoria, tituloCategoria) => {
      dispatch(loaderAction.startLoader());
      dispatch(fornecedorAPI.buscarFornecedoresPorCategoria(lat, long, categoria, tituloCategoria));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categoria);
