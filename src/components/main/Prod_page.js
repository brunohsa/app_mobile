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


class Produto extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {desc: '',
                  quantidade:0,
                  isLoading:true,
                  dataSource:[]}
  }

  async getProduto(){
    url="http://192.168.15.72:3001/cardapio/"+this.props.prodId;
    await axios.get(url)
    .then(responseJson => {this.setState({isLoading:false,
                                          dataSource:responseJson.data})})
    .catch(err => {console.log(err)});
  }

  async componentDidMount(){
   await this.getProduto();
  }

  aumentarQuantidade(){
    this.setState({quantidade:this.state.quantidade + 1});
  }

  diminuirQuantidade(){
    this.setState({quantidade:this.state.quantidade - 1});
  }

  render(){
    console.log(this.state.quantidade);
    return(
      <View>
          <Card>
            <Text style={{color:'#000000', fontSize:18}}>{this.state.dataSource.nome}</Text>
            <Text style={{color:'#7a7a7a', fontSize:13, marginTop:5, marginHorizontal:7}}>{this.state.dataSource.descricao}</Text>
            <Text style={{color:'#ff0000', fontSize:15, marginTop:7} }>{this.state.dataSource.valor}</Text>
            <TextInput 
              label="Observações"
            />
            <View style={{ flexDirection:"row" }}>
              <Button
                containerStyle={{position:'relative'}}
                onPress={this.aumentarQuantidade}
                icon="plus"
                mode="contained"
              />
              <Text>
                {this.state.quantidade}
              </Text>
              <Button
                containerStyle={{position:'relative'}}
                onPress={this.diminuirQuantidade}
                icon="minus"
                mode="contained"
              />
            </View>
          </Card>
          <View>
            <Button
              title="Adicionar no carrinho"
            />
          </View>
        </View>
    );}
  }


const theme ={
  Button:{
    buttonStyle: {
      marginTop:5,
      padding:10,
      backgroundColor: 'red',
      },
  }
};

export default Produto;