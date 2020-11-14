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
    <View>
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
          <View>
            <TextInput
              label="Nome"
              value={values.nome}
              onChangeText={handleChange('nome')}
              mode="outlined"
            />
            {errors.nome && touched.nome && <Text>{errors.nome}</Text>}
            <TextInput
              label="Telefone"
              value={values.telefone}
              onChangeText={handleChange('telefone')}
              mode="outlined"
            />
            {errors.telefone && touched.telefone && (
              <Text>{errors.telefone}</Text>
            )}
            <TextInput
              label="Nova senha"
              value={values.senha}
              onChangeText={handleChange('senha')}
              mode="outlined"
            />
            {errors.senha && touched.senha && <Text>{errors.senha}</Text>}
            <TextInput
              label="Digite novamente a senha"
              value={values.novaSenha}
              onChangeText={handleChange('novaSenha')}
              mode="outlined"
            />
            {errors.novaSenha && touched.novaSenha && (
              <Text>{errors.novaSenha}</Text>
            )}
            <Button title="Salvar" raised type="solid" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <View>
        <Button
          title="Sair"
          raised
          type="solid"
          onPress={() => Actions.reset()}
        />
      </View>
    </View>
  );
}

export default Configure;
