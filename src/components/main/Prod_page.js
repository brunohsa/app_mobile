import React, {Component} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Text,
  Button,
  Input,
  ThemeProvider
} from 'react-native-elements';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';


class Produto extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    url="http://192.168.15.72:3001/cardapio/"+this.props.prodId;
    axios.get(url)
      .then(responseJson => {this.setState({isSearching:false,
                                            dataSource: responseJson},
                            function(){this.arrayholder = responseJson.data})})
      .catch(err => {console.log(err)});
  }

  render(){
    return(
      <View>
        <Text>X-Bacon</Text>
        <Text>
          Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis ante lectus. Fusce eget sodales lorem.
          Aenean ut sem turpis. Mauris velit diam, vehicula in orci a, convallis egestas orci.
        </Text>
        <Text>R$13.90</Text>
        <Input 
          label="Observações"
        />
        <View>
          <Button
            icon={
              <Icon
                name="plus"
                size={15}
                color="#ff0000"
              />
            }
          />
          <Button
            icon={
              <Icon
                name="minus"
                size={15}
                color="#ff0000"
              />
            }
          />
        </View>
      </View>
    )}
}

export default Produto;