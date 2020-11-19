import {combineReducers} from 'redux';
import {loginReducers} from './LoginReducer';
import {cadastroReducers} from './CadastroReducer';
import {cardapioReducers} from './CardapioReducer';
import {carrinhoReducers} from './CarrinhoReducer';
import {fornecedorReducers} from './FornecedorReducer';
import {loaderReducers} from './LoaderReducer';


export default combineReducers({
  login: loginReducers,
  cadastro: cadastroReducers,
  cardapio: cardapioReducers,
  carrinho: carrinhoReducers,
  fornecedor: fornecedorReducers,
  loader: loaderReducers
});
