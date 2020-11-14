<<<<<<< Updated upstream
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {
  Card,
  Divider
} from 'react-native-paper';
=======
import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {Card, Divider, ActivityIndicator, Colors} from 'react-native-paper';
>>>>>>> Stashed changes
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import Categoria from './Categorias';
<<<<<<< Updated upstream
=======
import {Actions} from 'react-native-router-flux';
import {ScrollView} from 'react-native-gesture-handler';
import Produtos from './Produtos';
import FABCart from './FABCart';
>>>>>>> Stashed changes

class MainPage extends Component{
    
  constructor(props){
      super(props);

      this.state = {
        dataSource:[]
      };

      this.arrayholder =[];
  }

  async getProduct(){
    let url="http://192.168.15.72:3001/cardapio/";
    await axios.get(url)
    .then(responseJson => {this.setState({dataSource:responseJson.data})})
    .catch(err => {console.log(err)});
  }

  componentDidMount(){
    this.getProduct();
  }

<<<<<<< Updated upstream
  renderTops() {
    this.state.dataSource.sort(function(a,b){
      return a.nota-b.nota;
    });
    return(
      <View>
        {this.state.dataSource.map(function(item){
          return(
            <View>
              <TouchableOpacity onPress={() => {Actions.product({prodId:item.id})}} pointerEvents="none">
                <Card>
                  <View key={item.id} style={{marginHorizontal:12}}>
                    <Text h2Style style={{color:'#000000', fontSize:18}}>{item.nome}</Text>
                    <Text h4Style style={{color:'#7a7a7a', fontSize:13, marginTop:5, marginHorizontal:7}}>{item.descricao}</Text>
                    <Text h3Style style={{color:'#ff0000', fontSize:15, marginTop:7} }>{item.valor}</Text>
                  </View>
                </Card>
                <Divider />
              </TouchableOpacity>
            </View>
          )})}      
      </View>
    );
  }

  renderFavs(){
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
      <View style={{position:"relative"}}>
=======
  render() {
    if (this.state.isLoading) {
      <View>
        <ActivityIndicator animating={true} color={Colors.red200} />
      </View>;
    }
    return (
      <SafeAreaView style={{position: 'relative'}}>
>>>>>>> Stashed changes
        <ScrollView>
          <View style={{position:"relative"}}>
            <Text>Categorias</Text>
            <Categoria />
          </View>
          <View style={{position:"relative"}}>  
            <Text>Tops da região</Text>
            {this.renderTops()}
          </View>
        </ScrollView>
      </View>
    );
  }  

}

export default MainPage;