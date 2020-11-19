import React, {Component} from 'react';
import { connect } from 'react-redux'
import {AsyncStorage, View} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import App from './components/login_cadastro/LoginCadastro';
import ModalLoginCadastro from './components/login_cadastro/ModalCadastroLogin';
import MainPage from './components/main/Main';
import Icon from 'react-native-vector-icons/FontAwesome';
import Busca from './components/main/Busca';
import {Text} from 'react-native-elements';
import Pedidos from './components/main/Pedidos';
import Produto from './components/main/Prod_page';
import Configure from './components/main/Configurar';
import Loja from './components/main/Loja';
import Cart from './components/main/Cart';
import Pagamento from './components/main/Pagamento';
import Avaliacao from './components/main/Avaliacao';

import cardapioAPI from './components/redux/api/cardapioAPI';
import carrinhoAPI from './components/redux/api/carrinhoAPI';

import fornecedorAction from './components/redux/actions/FornecedorAction';
import cardapioAction from './components/redux/actions/CardapioAction';
import loginAction from './components/redux/actions/LoginAction';


class TabIcon extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Icon
          name={this.props.iconName}
          size={22}
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
    //if (this.props.loginStore.fazerLogout) {
      //this.props.logoutRealizado();
     // Actions.reset();
    //}
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
              navTransparent={false}
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
                onExit={() => this.props.limparFornecedoresPorCategoria()}
                onEnter={() => this.props.buscarProdutosDaRegiao()}
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
                onEnter={() => this.props.buscarProdutosDaRegiao()}
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
              key="avaliacao"
              title="Aroduto"
              component={Avaliacao}
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

const mapDispatchToProps = dispatch => {
  return {
    limparFornecedoresPorCategoria: () => {
      dispatch(fornecedorAction.limparFornecedoresPorCategoria());
    },
    buscarProdutosDaRegiao: () => {
      dispatch(loaderAction.startLoader());
      dispatch(cardapioAPI.buscarProdutosDaRegiao(-22.894114, -47.177018));
    },
    buscarPedidos: () => {
      dispatch(loaderAction.startLoader());
      dispatch(carrinhoAPI.buscarPedidos());
    },
  };
};

export default connect(null, mapDispatchToProps)(Routes);
