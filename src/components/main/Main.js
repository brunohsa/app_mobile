import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class MainPage extends Component{
    
  constructor(props){
      super(props);
  }

  renderTops(){
    return(
      <View>
        

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
        <Text>Tops da região</Text>
        {renderTops()}
        <Text>Favoritos</Text>
        {renderFavs()}


      </View>
    );
  }  

}

export default MainPage;