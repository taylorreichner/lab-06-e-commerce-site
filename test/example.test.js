// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

import { calcItemTotal, findById } from '../utils.js';
import { games } from '../data.js';
import { renderTableRow } from '../checkout/render-table-row.js';

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
    expected = {
        

    }
     
    const cartItem = {
        quantity: 5
    };
    const game = {
        price: 10,
        name: `rocket league`,
    };
    const actual = renderTableRow(cartItem, game);
    expect.deepEqual(actual, expected);
    

});