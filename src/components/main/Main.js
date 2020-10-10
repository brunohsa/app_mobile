import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

class MainPage extends Component{
    
  constructor(props){
      super(props);

      this.state = {};

      this.arrayholder =[];
  }

  async getProduct(){
    let url="http://192.168.15.72:3001/cardapio/";
    await axios.get(url)
    .then(responseJson => this.arrayholder = responseJson.data)
    .catch(err => {console.log(err)});
  }

  componentDidMount(){
    this.getProduct();
  }

  renderTops() {
    console.log(this.arrayholder)
    return(
      <View>
        <ScrollView>
        {this.arrayholder.map(function(item){
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
              </TouchableOpacity>
            </View>
          )})}      
        </ScrollView>
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
      <View>
        <Text>Categorias</Text>
        {this.renderCategorias()}
        <Text>Tops da região</Text>
        {this.renderTops()}
        <Text>Favoritos</Text>
        {this.renderFavs()}
      </View>
    );
  }  

}

export default MainPage;