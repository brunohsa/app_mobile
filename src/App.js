import React, {Component} from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Routes from './routes';
import combineReducers from './components/redux/reducers/rootReducer';

function App() {
  const store = createStore(combineReducers, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </Provider>
  );
}
export default App;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff0000',
    accent: '#fff',
    text: '#f00',
    background: '#fff'
  },
};