import { calcItemTotal } from "../utils.js";

export function renderTableRow(cartItem, game) {
    const quantity = cartItem.quantity;
    
    const tr = document.createElement('tr');

    console.log(tr);

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td')

    nameTd.textContent = game.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = `$${calcItemTotal(cartItem, game)}`;
    
    tr.append(nameTd, quantityTd, priceTd);

    return tr;
    
    }

