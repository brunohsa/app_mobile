import React, {Component} from 'react';
import {AsyncStorage, View} from 'react-native';
import {Actions, Overlay, Router, Scene, Stack} from 'react-native-router-flux';
import App from './components/login_cadastro/LoginCadastro';
import ModalLoginCadastro from './components/login_cadastro/ModalCadastroLogin';
import MainPage from './components/main/Main';
import Icon from 'react-native-vector-icons/FontAwesome';
import Busca from './components/main/Busca';
import {Text} from 'react-native-elements';
import Pedidos from './components/main/Pedidos';
import Produto from './components/main/Prod_page';
import Configure from './components/main/Configurar';
import loginActions from './components/redux/actions/LoginAction';
import Loja from './components/main/Loja';
import Cart from './components/main/Cart';
import Pagamento from './components/main/Pagamento';

class TabIcon extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Icon
          name={this.props.iconName}
          size={30}
          style={{color: this.props.focused ? '#000' : '#f00'}}
        />
        <Text
          style={{color: this.props.focused ? '#000' : '#f00', fontSize: 12}}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}
class Routes extends Component {
  
  constructor(props) {
    super(props);
  }

  usuarioLogado() {
    return AsyncStorage.getItem('token');
  }

  componentDidUpdate() {
    if (this.props.loginStore.fazerLogout) {
      this.props.logoutRealizado();
      Actions.reset();
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Router>
          <Stack key="root">
            <Scene
              key="start"
              component={App}
              initial={true}
              navTransparent={true}
            />
            <Scene
              key="modal"
              component={ModalLoginCadastro}
              navTransparent={true}
            />
              <Scene
                key="tabbar"
                tabs={true}
                swipeEnabled
                tabBarStyle={{backgroundColor: '#fff'}}
                navTransparent={true}
                hideNavBar
                lazy
                showLabel={false}
                back={false}>
                <Scene
                  key="index"
                  title="Home"
                  component={MainPage}
                  navTransparent={true}
                  hideNavBar
                  iconName="home"
                  icon={TabIcon}
                  back={false}
                />
                <Scene
                  key="search"
                  title="Busca"
                  component={Busca}
                  navTransparent={true}
                  hideNavBar
                  iconName="search"
                  icon={TabIcon}
                  back={false}
                />
                <Scene
                  key="order"
                  title="Pedidos"
                  component={Pedidos}
                  navTransparent={true}
                  hideNavBar
                  iconName="file-text-o"
                  icon={TabIcon}
                  back={false}
                />
                <Scene
                  key="config"
                  title="Conta"
                  component={Configure}
                  navTransparent={true}
                  hideNavBar
                  iconName="user"
                  icon={TabIcon}
                  back={false}
                />
                <Scene
                  key="carrinho"
                  title="Carrinho"
                  component={Cart}
                  navTransparent={true}
                  hideNavBar
                  iconName="shopping-bag"
                  icon={TabIcon}
                  back={false}
                />
              </Scene>
            <Scene
              key="product"
              title="Produto"
              component={Produto}
              navTransparent={true}
              hideNavBar
              back={false}
            />
            <Scene
              key="loja"
              title="Loja"
              component={Loja}
              navTransparent={true}
              hideNavBar
              back={false}
            />
            <Scene
              key="pagamento"
              title="Pagamento"
              component={Pagamento}
              navTransparent={true}
              hideNavBar
              back={false}
            />
          </Stack>
        </Router>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStore: state.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutRealizado: () => {
      dispatch(loginActions.logoutRealizado);
    },
  };
};

export default Routes;
