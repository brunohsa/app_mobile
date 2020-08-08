import React,{Component} from 'react';
import {
  SearchBar
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Filter extends Component{
    constructor(props){
        super(props);
      
        this.state = {
          search:''
        };
    }

    updateSearch(){
        setState({search});
    }

    render(){
        return(
        <SearchBar 
            placeholder="Digite sua busca..."
            onChangeText={this.updateSearch}
            lightTheme
            round
            containerStyle={{backgroundColor:'#ffffff'}}
            searchIcon={<Icon
                name="search"
                color="#7a7a7a"
                size={20}
              />}
        />
        );
    }
}

export default Filter;