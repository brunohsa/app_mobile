import * as React from 'react';

const LojaHelper = lojas => {
  <React.View>
    <React.Text>{lojas.razao_social}</React.Text>
    <React.Text>{lojas.distancia}</React.Text>
    <React.Text>{lojas.funcionamento.abertura}</React.Text>
  </React.View>;
};

export default LojaHelper;
