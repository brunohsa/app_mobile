import React, {Component} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Text,
  Button,
  Input,
  ThemeProvider,
  Card
} from 'react-native-elements';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';


class Produto extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {desc: '',
                  prod:{}}
  }

  async getProduct(){
    url="http://192.168.15.72:3001/cardapio/"+this.props.prodId;
    await axios.get(url)
    .then(responseJson => {this.setState({prod: responseJson.data})})
    .catch(err => {console.log(err)});
  }
  
  componentDidMount(){
    this.getProduct();
  }

  render(){
    return(
      <ThemeProvider theme={theme}>
        <View>
          <Card>
            <Text h2Style style={{color:'#000000', fontSize:18}}>{this.state.prod.nome}</Text>
            <Text h4Style style={{color:'#7a7a7a', fontSize:13, marginTop:5, marginHorizontal:7}}>{this.state.prod.descricao}</Text>
            <Text h3Style style={{color:'#ff0000', fontSize:15, marginTop:7} }>{this.state.prod.valor}</Text>
            <Input 
              label="Observações"
            />
            <View style={{ flexDirection:"row" }}>
              <Button
                containerStyle={{position:'relative'}}
                icon={
                  <Icon
                    name="plus"
                    size={15}
                    color="#ffffff"
                  />
                }
              />
              <Input 
              />
              <Button
                containerStyle={{position:'relative'}}
                icon={
                  <Icon
                    name="minus"
                    size={15}
                    color="#ffffff"
                  />
                }
              />
            </View>
          </Card>
        </View>
      </ThemeProvider>
    )}
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