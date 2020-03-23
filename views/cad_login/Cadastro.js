import React, {Component} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Modal
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons';

class Cadastro extends Component{
    state = {
        modalVisible:false,
    };

    setModalVisible(visible){
        this.setState({modalVisible:visible});
    }

    render(){
        return(
            <>
                <StatusBar barStyle="dark-content" backgroundColor='#ff4500' translucent/>
                <SafeAreaView style={body}>     
                    <View style={titleContainer}>
                        <Text style={sectionTitle}>LOGO</Text>
                    </View>
                    <View>
                        <Text>Cadastre-se</Text>
                    </View>
                    <
                    <Modal
                     animationType="slide"
                     transparent={false}
                     visible={this.state.modalVisible}
                     >
                        <View style={contContainer}>
                            <TextInput
                             style={input} 
                             textContentType='emailAddress' 
                             placeholder='Digite seu email' 
                             onChangeName ={text => onChangeText(text)} 
                             value={value1}/>
                        </View>
                        <View style={contContainer}>
                            <TextInput
                             style={input} 
                             textContentType='password'
                             secureTextEntry 
                             placeholder='Digite sua senha' 
                             onChangePass ={text => onChangeText(text)} 
                             value={value2} />
                        </View>
                        <View style={contContainer}>
                            <TouchableOpacity style={button}>
                                <Text style={buttonText}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <View style={contContainer}>
                        <TouchableOpacity style={button}>
                            <Text><FontAwesomeIcon icon={faFacebookSquare} />       Entrar com Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button}>
                            <Text><FontAwesomeIcon icon={faGoogle} />       Entrar </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </>
        );
    }
}
export default Cadastro;