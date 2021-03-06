import * as React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {TextInput, Divider} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

function Pagamento() {
  const FormSchema = Yup.object().shape({
    numcard: Yup.string().required('Campo obrigatório'),
    titular: Yup.string().required('Campo obrigatório'),
    validade: Yup.string().required('Campo obrigatório'),
    cvv: Yup.string().required('Campo obrigatório'),
  });

  return (
    <View style={{marginLeft: 20, marginRight: 20}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          paddingLeft: 5,
          paddingTop: 15,
          paddingBottom: 9,
        }}>
        Pagamento
      </Text>
      <Formik
        initialValues={{
          numcard: '',
          titular: '',
          validade: '',
          cvv: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={FormSchema}>
        {({values, handleChange, handleSubmit, errors, touched}) => (
          <View>
            <View>
              <TextInput
                style={{backgroundColor: '#fff'}}
                label="Número do cartão"
                value={values.numcard}
                onChangeText={handleChange('numcard')}
                mode="outline"
              />
              {errors.numcard && touched.numcard && (
                <Text>{errors.numcard}</Text>
              )}
              <TextInput
                style={{backgroundColor: '#fff'}}
                label="Titular do cartão"
                value={values.titular}
                onChangeText={handleChange('titular')}
                mode="outline"
              />
              {errors.titular && touched.titular && (
                <Text>{errors.titular}</Text>
              )}
              <TextInput
                style={{backgroundColor: '#fff'}}
                label="Validade"
                value={values.validade}
                onChangeText={handleChange('validade')}
                mode="outline"
              />
              {errors.validade && touched.validade && (
                <Text>{errors.validade}</Text>
              )}
              <TextInput
                style={{backgroundColor: '#fff'}}
                label="CVV"
                value={values.cvv}
                onChangeText={handleChange('cvv')}
                mode="outline"
              />
              {errors.cvv && touched.cvv && <Text>{errors.cvv}</Text>}
              <Divider />
              <View style={{marginTop: 15}}>
                <Button
                  title="Finalizar compra"
                  buttonStyle={{
                    color: '#fff',
                    alignSelf: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    backgroundColor: '#f00',
                    padding: 8,
                    borderRadius: 8,
                    elevation: 3,
                    shadowOffset: {width: 5, height: 5},
                    shadowColor: '#000',
                    shadowOpacity: 1,
                    shadowRadius: 2,
                    width: '100%',
                  }}
                  mode="contained"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Pagamento;
