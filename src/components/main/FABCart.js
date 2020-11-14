import React, {Component} from 'react';
import {View} from 'react-native';
import {FAB} from 'react-native-paper';
import Cart from './Cart';

function FABCart() {
  return (
    <FAB icon="cart-outline">
      <Cart />
    </FAB>
  );
}

export default FABCart;
