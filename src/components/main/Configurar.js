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
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class Configure extends Component {
  constructor(props){
    super(props);
  }

  renderUserConfig(){
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded.(!expanded);

    return(
      <List.Section title="Configuração de conta">
        <List.Accordion
          title="Dados Pessoais"
          left={props => <List.Icon {...props} icon="caret-right"/>}
          expanded={expanded}
          onPress={handlePress}
        >
        <List.Item>
        </List.Item>
        </List.Accordion>
      </List.Section>
    );
  }

  render(){
    return(
      <View>
        {this.renderUserConfig()}
      </View>
    );
  }
}

export default Configure;