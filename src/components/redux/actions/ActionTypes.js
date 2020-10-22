const actionTypes = {
  //Login
  FAZER_LOGIN: 'LOGIN',
  LOGIN_REALIZADO: 'LOGIN_REALIZADO',
  FAZER_LOGOUT: 'FAZER_LOGOUT',
  LOGOUT_REALIZADO: 'LOGOUT_REALIZADO',

  //Cadastro
  FAZER_CADASTRO: 'CADASTRO',
  CADASTRO_REALIZADO: 'LOGIN_REALIZADO',

  //Cardapio
  CARDAPIOS_ENCONTRADOS: 'CARDAPIOS_ENCONTRADOS',
  CATEGORIA_ENCONTRADA: 'CATEGORIA_ENCONTRADA',
  PRODUTO_ENCONTRADO: 'PRODUTO_ENCONTRADO',
  CARDAPIO_ENCONTRADO: 'CARDAPIO_ENCONTRADO',

  //Carrinho
  PRODUTO_ADICIONADO: 'PRODUTO_ADICIONADO',
  PRODUTO_REMOVIDO: 'PRODUTO_REMOVIDO',

  //Pagamento
  PAGAMENTO_EFETUADO: 'PAGAMENTO_EFETUADO',

  //Pedidos
  PEDIDO_EFETUADO: 'PEDIDO_EFETUADO',
  PEDIDOS: 'PEDIDOS',

  //Erros
  APRESENTAR_ERROS: 'APRESENTAR_ERROS',
};

export default actionTypes;
