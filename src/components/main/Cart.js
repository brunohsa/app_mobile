import * as React from 'react';
import {View} from 'react-native';
import {Text, Button, Card} from 'react-native-elements';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: null,
      isLoading: false,
    };
  }

  //192.168.15.27
  //192.168.15.72
  componentDidMount() {
    this.setState({isLoading: true});
    let url = 'http://192.168.0.44:3001/carrinho/';
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({dataSource: json, isLoading: false});
        return json;
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.isLoading) {
      <View style={{flex: 1, justifyContent: 'center', alingItens: 'center'}}>
        <ActivityIndicator
          animating={true}
          color={Colors.red200}
          size="large"
        />
      </View>;
    }
    return (
      <View>
        <View style={{marginTop: 15, marginLeft: 8}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingLeft: 5,
              paddingBottom: 9,
            }}>
            Carrinho
          </Text>
        </View>
        <View style={{marginTop: 15, marginLeft: 8}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              paddingLeft: 5,
              paddingBottom: 9,
            }}>
            Itens
          </Text>
        </View>
        {this.state.dataSource !== null ? (
          this.state.dataSource.map(item => {
            return (
              <View key={item.id}>
                {item.itens.map(itens => {
                  return (
                    <Card>
                      <View key={item.id}>
                        <View
                          style={{
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: '#000',
                              marginLeft: 25,
                            }}>
                            Item:
                          </Text>
                          <Text style={{color: '#5E5B5B'}}> {itens.nome}</Text>
                        </View>
                        <View
                          style={{
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: '#000',
                              marginLeft: 25,
                            }}>
                            Observaçoes:
                          </Text>
                          <Text style={{color: '#5E5B5B'}}>
                            {' '}
                            {itens.observacoes}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: '#000',
                              marginLeft: 25,
                            }}>
                            Quantidade:
                          </Text>
                          <Text style={{color: '#5E5B5B'}}>
                            {' '}
                            {itens.quantidade}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: '#000',
                              marginLeft: 25,
                            }}>
                            Preço:
                          </Text>
                          <Text style={{color: '#5E5B5B'}}>
                            R$ {itens.valor}
                          </Text>
                        </View>
                      </View>
                    </Card>
                  );
                })}
                <View
                  style={{
                    alignItems: 'flex-end',
                    marginRight: '10%',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#f00',
                      alignSelf: 'flex-end',
                      marginRight: 10,
                    }}>
                    Total: R$ {item.valor_total}
                  </Text>
                </View>
              </View>
            );
          })
        ) : (
          <View />
        )}
        <Button
          buttonStyle={{
            backgroundColor: '#f00',
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
          title="Pagamento"
          type="solid"
          onPress={() => Actions.pagamento()}
        />
      </View>
    );
  }
}

export default Cart;
