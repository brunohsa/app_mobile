var users  = require('./db.json');
var cardapio = require('./cardapio.json');

module.exports = function() {
    return {
    users  : users.users,
    produtos : cardapio.produtos,
    cardapio: cardapio.produtos,
    }
}

