import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import {
  Text,
  Divider,
  ThemeProvider,
  Header
} from 'react-native-elements';
import Filter from './Filtro';
import { ScrollView } from 'react-native-gesture-handler';

class Busca extends Component{
    
  constructor(props){
    super(props);
  
    this.arrayholder = [];
  }

  async getCardapio(){
    url="http://192.168.15.72:3001/cardapio";
    await axios.get(url)
      .then(response => response.json())
      .then(responseJson => {this.setState({dataSource}, function(){this.arrayholder = responseJson})})
      .catch(err => {console.log("Falhou o get")});
  }

  componentDidMount(){
    this.getCardapio();
  }

  renderHistoricoPesquisa(){
    return(
      <View>

      </View>
    );
  }

  renderCategorias(){
    return(
      <View>
        
      </View>
    );
  }

  render(){
    return(
    <ThemeProvider>
      <View>
        <Header centerComponent={{ text: 'Busca', style: { color: '#f00' , fontSize:22} }}
          containerStyle={{
            backgroundColor: '#ffffff',
            justifyContent: 'space-around',
          }} />
        <Filter />
        {/*Render itens do cardapio*/}
        <ScrollView>
          <View style={{marginHorizontal:8}}>
            {this.state.itens.map(function(item){
              return (
                <View>
                  <View key={item.id} style={{marginHorizontal:12}}>
                    <Text h2Style style={{color:'#000000', fontSize:18}}>{item.nome}</Text>
                    <Text h4Style style={{color:'#7a7a7a', fontSize:13, marginTop:5, marginHorizontal:7}}>{item.descricao}</Text>
                    <Text h3Style style={{color:'#ff0000', fontSize:15, marginTop:7} }>{item.valor}</Text>
                  </View>
                  <Divider />
                </View>
              )})}
          </View>
        </ScrollView>
      </View>
    </ThemeProvider>
    );
  }  

}

export default Busca;