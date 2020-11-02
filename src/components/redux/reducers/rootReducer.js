import { combineReducers } from "redux";
import { loginReducers } from './LoginReducer';
import { cadastroReducers } from './CadastroReducer';
import { cardapioReducers } from './CardapioReducer';
import { carrinhoReducers } from './CarrinhoReducer';
import { pedidoReducers } from './PedidoReducer';
import { pagamentoReducers } from './PagamentoReducer';

export default combineReducers({
  login: loginReducers,
  cadastro: cadastroReducers,
  cardapio: cardapioReducers,
  carrinho: carrinhoReducers,
  pedido: pedidoReducers,
  pagamento: pagamentoReducers,
});