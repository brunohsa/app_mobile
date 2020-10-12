import * as React from 'react';
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
import {
  List,
  TextInput,
  Switch,
  Divider,
  Button
  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

  function Pagamento(){
    return(
      <View>
        <View>
          <TextInput 
            label="Número do cartão"
            value={numcard}
            onChangeText={text => setText(text)}
            mode="outline"
          />
          <TextInput 
            label="Titular do cartão"
            value={titular}
            onChangeText={text => setText(text)}
            mode="outline"
          />
          <TextInput 
            label="Validade"
            value={validade}
            onChangeText={text => setText(text)}
            mode="outline"
          />
          <TextInput 
            label="CVV"
            value={cvv}
            onChangeText={text => setText(text)}
            mode="outline"
          />
          <Divider />
          <Button 
            mode="contained"
            onPress={() => console.log("pagamento")}
          >
            Finalizar compra
          </Button>
        </View>
      </View>
    );
  }
}

export default Pagamento;