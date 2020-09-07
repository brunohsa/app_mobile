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
import Icon from 'react-native-vector-icons/FontAwesome';


class Produto extends Component {
  constructor(props){
    super(props);
  }

  render(){
    <View>
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
    </View>
    }


}