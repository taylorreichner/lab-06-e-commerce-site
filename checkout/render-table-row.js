export function renderTableRow(cartItem, game) {
    const quantity = cartItem.quantity;
    
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td')

    nameTd.textContent = game.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = `$${getGameTotal(cartItem, game)}`;
    
    tr.append(nameTd, quantityTd, priceTd);

    return tr;
    
    }

export function getGameTotal(cartItem, game) {
    return cartItem.quantity * game.price;
}