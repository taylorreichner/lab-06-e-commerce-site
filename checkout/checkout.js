import { cart } from './checkout-data.js';
import { renderTableRow } from './render-table-row.js';
import { games } from '../data.js';
import { findById } from '../utils.js';
import { calcOrderTotal } from '../utils.js';
import { getCheckout } from '..cart-utils.js';

const table = document.querySelector('table');
const total = calcOrderTotal(cart, games); 
    
for (let item of cart) {
    const game = findById(item.id, games);
    const tableRow = renderTableRow(item, game);

    table.append(tableRow);
}

const tr = document.createElement('tr');
const orderTotalRow = document.createElement('td');

orderTotalRow.textContent = `Are you sure you want to spend $${total} on video games?`;
tr.append(orderTotalRow);
table.append(tr);

const Button = document.querySelector('button');

Button.addEventListener('click', () => {
    const checkout = getCheckout();

    alert(JSON.stringify(checkout, true, 2));


});
