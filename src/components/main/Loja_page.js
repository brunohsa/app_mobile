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
}

export default Filter;