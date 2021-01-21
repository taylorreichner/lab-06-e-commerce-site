// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

import { findById } from '../utils.js';
import { games } from '../data.js';

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
