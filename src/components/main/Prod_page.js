import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, Card} from 'react-native-elements';
import {Button, TextInput, ActivityIndicator, Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class Produto extends Component {
  constructor(props) {
    super(props);

    this.state = {desc: '', quantidade: 0, isLoading: false, dataSource: {}};
  }

  //192.168.15.27
  //192.168.15.72
  componentDidMount() {
    this.setState({isLoading: true});
    let url = 'http://192.168.0.44:3001/produto/' + this.props.prodId;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({dataSource: json, isLoading: false});
        return json;
      })
      .catch(err => {
        console.log(err);
      });
  }

  aumentarQuantidade() {
    this.setState(prevstate => ({
      quantidade: prevstate.quantidade + 1,
    }));
  }

  diminuirQuantidade() {
    this.setState(prevstate => ({
      quantidade: prevstate.quantidade - 1,
    }));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex:1,justifyContent:'center', alingItens:'center'}}>
          <ActivityIndicator animating={true} color={Colors.red200} size='large'/>
        </View>
      );
    }
    return (
      <View style={{justifyContent:'center', flex:1}}>
        <Card>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#000000', fontSize: 18}}>
            {this.state.dataSource.nome}
          </Text>
          <Text
            style={{color: '#d4af37', fontSize: 15, marginTop: 7, marginLeft:'75%'}}>
            <Icon name="star" size={15} color="#d4af37"/>
            {this.state.dataSource.nota}
          </Text>
        </View>
          <Text
            style={{
              color: '#7a7a7a',
              fontSize: 13,
              marginTop: 5,
              marginHorizontal: 7,
            }}>
            {this.state.dataSource.descricao}
          </Text>
          <Text style={{color: '#ff0000', fontSize: 15, marginTop: 7}}>
           R$ {this.state.dataSource.valor}
          </Text>
          <TextInput label="Observações" style={{backgroundColor:'#fff'}} />
          <View style={{flexDirection: 'row', alignSelf:'center', marginTop:15}}>
            <Button
              style={{
                borderRadius:5
              }}
              containerStyle={{position: 'relative'}}
              onPress={() => this.aumentarQuantidade()}
              icon="plus"
              mode="contained"
            />
            <Text style={{width:20, alignSelf:'center', marginLeft:10}}>{this.state.quantidade}</Text>
            <Button
              style={{
                borderRadius:5
              }}
              containerStyle={{}}
              onPress={() => this.diminuirQuantidade()}
              icon="minus"
              mode="contained"
            />
          </View>
        </Card>
        <View>
          <Button
            mode="contained"
            style={{
              width: 150,
              alignSelf: 'center',
              paddingTop: 10,
              marginTop: 15,
              borderRadius:5
            }}>
            Adicionar
          </Button>
        </View>
      </View>
    );
  }
}

export default Produto;
