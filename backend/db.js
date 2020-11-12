var users = require('./db.json');
var cardapio = require('./cardapio.json');
var top = require('./produtotop.json');
var pedidos = require('./pedidos.json');

module.exports = function() {
  return {
    users: users.users,
    cardapio: cardapio.produtos,
    produto: top,
    pedidos: pedidos,
  };
};
