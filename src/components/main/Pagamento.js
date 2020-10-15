import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Text,
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
import {Formik} from 'formik';
import * as Yup from 'yup';

  function Pagamento(){
    const numcard = React.useRef(null);
    const titular = React.useRef(null);
    const validade = React.useRef(null);
    const cvv = React.useRef(null);

    const FormSchema = Yup.object().shape({
      numcard: Yup.string().required('Campo obrigatório'),
      titular: Yup.string().required('Campo obrigatório'),
      validade: Yup.string().required('Campo obrigatório'),
      cvv: Yup.string().required('Campo obrigatório'),
    });

    return(
      <Formik
        initialValues={{
          numcard:'',
          titular:'',
          validade:'',
          cvv:'',
        }}
        onSubmit={values => {console.log(values);}}
        validationSchema={FormSchema}>
        {({values,
          handleChange,
          handleSubmit,
          errors,
          touched}) => (
      <View>
        <View>
          <TextInput 
            label="Número do cartão"
            value={values.numcard}
            onChangeText={handleChange('numcard')}
            mode="outline"
          />
          {errors.numcard && touched.numcard && <Text>{errors.numcard}</Text>}
          <TextInput 
            label="Titular do cartão"
            value={values.titular}
            onChangeText={handleChange('titular')}
            mode="outline"
          />
          {errors.titular && touched.titular && <Text>{errors.titular}</Text>}
          <TextInput 
            label="Validade"
            value={values.validade}
            onChangeText={handleChange('validade')}
            mode="outline"
          />
          {errors.validade && touched.validade && <Text>{errors.validade}</Text>}
          <TextInput 
            label="CVV"
            value={values.cvv}
            onChangeText={handleChange('cvv')}
            mode="outline"
          />
          {errors.cvv && touched.cvv && <Text>{errors.cvv}</Text>}
          <Divider />
          <Button 
            mode="contained"
            onPress={handleSubmit}
            //onPress={() => console.log("pagamento")}
          >
            Finalizar compra
          </Button>
        </View>
      </View>
      )}
      </Formik>
    );
  }


export default Pagamento;