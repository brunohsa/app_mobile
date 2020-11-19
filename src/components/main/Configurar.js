import React, {Component, useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import {AsyncStorage} from 'react-native';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {TextInput, ActivityIndicator, Colors} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Actions} from 'react-native-router-flux';

import cadastroAPI  from '../redux/api/cadastroAPI';
import loaderAction  from '../redux/actions/LoaderAction';
import cadastroAction  from '../redux/actions/CadastroAction';

class Configure extends Component {

  constructor(props) {
    super(props)

    this.state = {
      buscandoCadastro: false,
      cadastro: null,
      sobrenome: this.props.cadastroStore.cadastro ? this.props.cadastroStore.cadastro.sobrenome : null,
      telefone: this.props.cadastroStore.cadastro ? this.props.cadastroStore.cadastro.telefone : null,
      cpf: this.props.cadastroStore.cadastro ? this.props.cadastroStore.cadastro.cpf : null
    }
  }

  componentDidMount() {
    if(this.props.cadastroStore && !this.props.cadastroStore.cadastro && !this.buscandoCadastro) {
      this.setState({buscandoCadastro: true})
      this.props.buscarCadastro()
    }
  }

  atualizarCadastro() {
    let cadastro = this.props.cadastroStore.cadastro
    cadastro.sobrenome = this.state.sobrenome
    cadastro.telefone = this.state.telefone
    cadastro.cpf = this.state.cpf

    this.setState({cadastro: cadastro})
    this.props.atualizarCadastro(this.state.sobrenome, this.state.telefone, this.state.cpf)
  }

  sair() {
    AsyncStorage.removeItem('token');
    Actions.reset()
  }

  handleChange(campo, valor) {
    this.setState({
      [campo]: valor
    })
  }

  render() {
    let pessoa = this.props.cadastroStore.cadastro ? this.props.cadastroStore.cadastro.pessoa : null
    
    if (this.props.loaderStore.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alingItens: 'center'}}>
          <ActivityIndicator
            animating={true}
            color={Colors.red200}
            size="large"
          />
        </View>
      );
    }
    return (
      <View style={{height: '100%'}}>
        <TextInput
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
          label="Nome"
          disabled={this.props.cadastroStore.cadastro}
          value={this.state.nome != null ? this.state.nome : pessoa ? pessoa.nome : null}
        />
        <TextInput
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
          label="sobrenome"
          value={this.state.sobrenome != null ? this.state.sobrenome : pessoa ? pessoa.sobrenome : null}
          onChangeText={(text) => this.handleChange('sobrenome', text)}
        />
        <TextInput
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
          label="Telefone"
          value={this.state.telefone != null ? this.state.telefone : pessoa ? pessoa.telefone : null}
          onChangeText={(text) => this.handleChange('telefone', text)}
        />
        <TextInput
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
          label="CPF"
          disabled={pessoa && pessoa.cpf}
          value={this.state.cpf != null ? this.state.cpf : pessoa ? pessoa.cpf : null}
          onChangeText={(text) => this.handleChange('cpf', text)}
        />
        <Button
          buttonStyle={{
            backgroundColor: '#f00',
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
          title="Salvar"
          type="solid"
          onPress={() => this.atualizarCadastro()}
        />
        <Button
          buttonStyle={{
            backgroundColor: '#f00',
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
          title="Sair"
          type="solid"
          onPress={() => this.sair()}
        />
      </View>
    )      
  }
}

const mapStateToProps = state => {
  return {
    cadastroStore: state.cadastro,
    loaderStore: state.loader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buscarCadastro: () => {
      dispatch(loaderAction.startLoader());
      dispatch(cadastroAPI.buscarCadastro());
    },
    atualizarCadastro: (sobrenome, telefone, cpf) => {
      dispatch(loaderAction.startLoader());
      dispatch(cadastroAPI.atualizarCadastro(sobrenome, telefone, cpf));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Configure);