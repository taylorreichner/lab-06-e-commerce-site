// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

import { calcItemTotal, findById } from '../utils.js';
import { games } from '../data.js';
import { renderTableRow } from '../checkout/render-table-row.js';
import { calcOrderTotal } from '../utils.js';
import { cart } from '../checkout/checkout-data.js';
import { renderGame } from '../products/render-game.js';



test('findById should take in a 1 and the games array and return rocket league', (expect) => {

    const expected = {
        id: 1,
        name: 'Rocket League',
        image: 'rocket-league.png',
        description: 'A soccer game played with RC cars',
        category: 'Sports',
        price: 15,
    };

    const actual = findById(1, games);

    expect.deepEqual(actual, expected);
   

});



test('calcItemTotal should take in a quantity and an amount then return a total', (expect) => {
    const expected = 50;
    

    const cartItem = {
        quantity: 5
    };
    const game = {
        price: 10
    };
    const actual = calcItemTotal(cartItem, game);
    expect.deepEqual(actual, expected);

});


test('renderTableRow will return the item, its quantity and its product', (expect) => {
    const expected = `<tr><td>rocket league</td><td>5</td><td>$50</td></tr>`;
     
    const cartItem = {
        quantity: 5
    };
    const game = {
        price: 10,
        name: `rocket league`,
    };
    const actual = renderTableRow(cartItem, game);
    expect.deepEqual(actual.outerHTML, expected);
    

});

test('when givin items from the cart it should return a string with total order number', (expect) => {

    const expected =  795;
     
    const actual = calcOrderTotal(cart, games);

    expect.deepEqual(actual, expected);

});
test('it should return a string that defines an object???', (expect) => {
    
    const expected = '<li class=\"game-item\"><h3 class=\"game-name\"></h3><img class=\"game-image\" src=\"../assets/undefined\"><p class=\"game-description\"></p><p class=\"game-category\"></p><p class=\"game-price\">$undefined</p><button>Add to cart</button></li>';
    const fakeGame = games;

    const actual = renderGame(fakeGame);

    expect.equal(actual.outerHTML, expected);

});

