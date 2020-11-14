var users  = require('./db.json');
var cardapio = require('./cardapio.json');
<<<<<<< Updated upstream

module.exports = function() {
    return {
    users  : users.users,
    produtos : cardapio.produtos,
    cardapio: cardapio.produtos,
    }
}

=======
var top = require('./produtotop.json');
var pedidos = require('./pedidos.json');
var carrinho = require('./carrinho.json');
var fornecedor = require('./fornecedor.json');

module.exports = function() {
  return {
    users: users,
    cardapio: cardapio,
    produto: top,
    pedidos: pedidos,
    carrinho: carrinho,
    fornecedor: fornecedor,
  };
};
>>>>>>> Stashed changes
