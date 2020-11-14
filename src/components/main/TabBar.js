import * as React from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Categorias from './Categorias';
import Produtos from './Produtos';
import LojaHelper from './LojaHelper';

const renderItens = produtos => {
  return (
    <React.View style={{position: 'relative', marginBottom: 15}}>
      {produtos.produtos !== null ? (
        produtos.produtos.map(item => <Produtos item={item} />)
      ) : (
        <Categorias />
      )}
    </React.View>
  );
};

const renderLojas = lojas => {
  return (
    <React.View style={{position: 'relative', marginBottom: 15}}>
      {lojas.lojas !== null ? (
        lojas.lojas.map(loja => <LojaHelper lojas={loja} />)
      ) : (
        <Categorias />
      )}
    </React.View>
  );
};

function TabBar(props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'produtos', title: 'Produtos'},
    {key: 'lojas', title: 'Lojas'},
  ]);

  const renderScene = SceneMap({
    produtos: renderItens,
    lojas: renderLojas,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
}

export default TabBar;
