<<<<<<< Updated upstream
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
=======
import React, {Component} from 'react';
>>>>>>> Stashed changes
import {
  SafeAreaView,
  StyleSheet,
  View,
<<<<<<< Updated upstream
  TouchableOpacity
=======
  TouchableOpacity,
  Dimensions,
>>>>>>> Stashed changes
} from 'react-native';
import axios from 'axios';
import {
  Text,
  Card,
  Divider,
  ThemeProvider,
  Header,
  SearchBar
} from 'react-native-elements';
import {
  Chip
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
<<<<<<< Updated upstream
import { Actions } from "react-native-router-flux";
import { ScrollView } from 'react-native-gesture-handler';
import Categoria from './Categorias';
=======
import {Actions} from 'react-native-router-flux';
import {ScrollView} from 'react-native-gesture-handler';
import Categorias from './Categorias';
import Produtos from './Produtos';
import TabBar from './TabBar';
>>>>>>> Stashed changes

class Busca extends Component{
    
  constructor(props){
    super(props);
    
    this.state = {isSearching:true,
                  search: ''}

    this.arrayholder = [];
  }

<<<<<<< Updated upstream
  async getCardapio(){
    var url="http://192.168.15.72:3001/cardapio/";
    await axios.get(url)
      .then(responseJson => {this.setState({isSearching:false,
                                            dataSource: responseJson},
                            function(){this.arrayholder = responseJson.data})})
      .catch(err => {console.log(err)});
  }

  renderHistoricoPesquisa(){
    return(
      <View>

      </View>
    );
  }

  renderFiltros(){
    return(
=======
  renderFiltros() {
    return (
>>>>>>> Stashed changes
      <View>
      <Chip> </Chip>
      </View>
    );
  }

<<<<<<< Updated upstream

  componentDidMount(){
    this.getCardapio();
=======
  //192.168.15.27
  //192.168.15.72
  componentDidMount() {
    this.setState({isLoading: true});
    let urlProdutos = 'http://192.168.15.72:3001/produto/';
    let urlLojas = 'http://192.168.15.72:3001/fornecedor/';
    Promise.all([fetch(urlProdutos), fetch(urlLojas)])
      .then(([resp1, resp2]) => Promise.all([resp1.json(), resp2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          dataSource: data1,
          lojasSource: data2,
          isLoading: false,
        }),
      )
      .catch(err => {
        console.log(err);
      });
>>>>>>> Stashed changes
  }

  search = text => {
    console.log(text);
  }

  clear = () => {
    this.search.clear();
  }

  updateSearch(text){
      this.setState({
        isSearching:true,
        search:text
      });
      this.getCardapio();
  }

  renderSearchBar(){
    return(
      <SearchBar 
        placeholder="Digite sua busca..."
        onChangeText={text => this.updateSearch(text)}
        lightTheme
        round
        containerStyle={{backgroundColor:'#ffffff'}}
        searchIcon={<Icon
            name="search"
            color="#7a7a7a"
            size={20}
          />}
        value={this.state.search}
      />
    );
  }

  renderCategorias(){
    return(
      <View>
        <Text>Categorias</Text>
      </View>
    );
  }

<<<<<<< Updated upstream
  renderItens(){
    if(this.arrayholder.length != 0){
      return(
        <View>
            <View style={{marginHorizontal:8}}>
              {this.arrayholder.map(function(item){
                return (
                  <View>
                    <TouchableOpacity onPress={() => {Actions.product({prodId:item.id})}} pointerEvents="none">
                      <Card>
                        <View key={item.id} style={{marginHorizontal:12}}>
                          <Text h2Style style={{color:'#000000', fontSize:18}}>{item.nome}</Text>
                          <Text h4Style style={{color:'#7a7a7a', fontSize:13, marginTop:5, marginHorizontal:7}}>{item.descricao}</Text>
                          <Text h3Style style={{color:'#ff0000', fontSize:15, marginTop:7} }>{item.valor}</Text>
                        </View>
                      </Card>
                    </TouchableOpacity>
                  </View>
                )})}
=======
  renderError() {
    return (
      <View>
        <Text> Erro ao carregar as informações da página. </Text>
      </View>
    );
  }

  renderLoading() {
    return <ActivityIndicator animating={!this.state.isLoading} />;
  }

  render() {
    return (
      <ThemeProvider>
        <View style={{position: 'relative'}}>
          <ScrollView>
            <View style={{position: 'relative'}}>{this.renderSearchBar()}</View>
            <View>
              {this.state.dataSource !== null &&
              this.state.lojasSource != null ? (
                <TabBar
                  produtos={this.state.dataSource}
                  lojas={this.state.lojasSource}
                />
              ) : (
                <View />
              )}
>>>>>>> Stashed changes
            </View>
        </View>
      )
    } 
    else if(this.state.isSearching && this.arrayholder.length == 0){
      return(
        <View>
          <Text>
            Infelizmente não encontramos sua pesquisa :(
          </Text>
        </View>
      );
    }
    else {
      return(
        <View>
          <Categoria />
        </View>
      );
    }
  }

  render(){
    return(
    <ThemeProvider>
      <View style={{position:"relative"}}>
        <ScrollView>
          <View style={{position:"relative"}}>
            {this.renderSearchBar()}
          </View>
          <View style={{position:"relative", marginBottom:15}}>
              {this.renderItens()}
          </View>
        </ScrollView>
      </View>
    </ThemeProvider>
    );
  }  

}

export default Busca;