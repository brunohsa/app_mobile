import * as React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Actions} from 'react-native-router-flux';

function Configure() {
  const FormSchema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    telefone: Yup.string().required('Campo obrigatório'),
    senha: Yup.string().required('Campo obrigatório'),
    novaSenha: Yup.string().required('Campo obrigatório'),
  });

  return (
    <View style={{flex: 1, height: '100%'}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          paddingLeft: 5,
          marginLeft: 20,
        }}>
        Configuração
      </Text>
      <Formik
        initialValues={{
          nome: '',
          telefone: '',
          senha: '',
          novaSenha: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={FormSchema}>
        {({values, handleChange, handleSubmit, errors, touched}) => (
          <View style={{height: '100%'}}>
            <TextInput
              style={{
                backgroundColor: '#fff',
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
              }}
              label="Nome"
              value={values.nome}
              onChangeText={handleChange('nome')}
            />
            {errors.nome && touched.nome && <Text>{errors.nome}</Text>}
            <TextInput
              style={{
                backgroundColor: '#fff',
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
              }}
              label="Telefone"
              value={values.telefone}
              onChangeText={handleChange('telefone')}
            />
            {errors.telefone && touched.telefone && (
              <Text>{errors.telefone}</Text>
            )}
            <TextInput
              style={{
                backgroundColor: '#fff',
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
              }}
              label="Nova senha"
              value={values.senha}
              onChangeText={handleChange('senha')}
            />
            {errors.senha && touched.senha && <Text>{errors.senha}</Text>}
            <TextInput
              style={{
                backgroundColor: '#fff',
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
              }}
              label="Digite novamente a senha"
              value={values.novaSenha}
              onChangeText={handleChange('novaSenha')}
            />
            {errors.novaSenha && touched.novaSenha && (
              <Text>{errors.novaSenha}</Text>
            )}
            <Button
              buttonStyle={{
                backgroundColor: '#f00',
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
              }}
              title="Salvar"
              type="solid"
              onPress={handleSubmit}
            />
            <Button
              buttonStyle={{
                backgroundColor: '#f00',
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
              }}
              type="solid"
              onPress={() => Actions.reset()}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Configure;
