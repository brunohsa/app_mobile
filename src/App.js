import React, {Component} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Routes from './routes';
import combineReducers from './components/redux/reducers/rootReducer';

function App() {
  const store = createStore(combineReducers, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </Provider>
  );
}
export default App;
