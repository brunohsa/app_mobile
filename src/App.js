import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Routes from './routes';
import combineReducers from './compenents/redux/reducers/rootReducer';

class App extends Component {

    render() {
       return (
         <PaperProvider>
            <Routes />
         </PaperProvider>
       );
    }
}
export default App;