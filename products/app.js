// import functions and grab DOM elements
import { games } from '../data.js';
import { renderGame } from './render-game.js'

const list = document.getElementById('list');
// initialize state
for (let game of games) {
const gameElement = renderGame(game);

list.append(gameElement);

}


// set event listeners to update state and DOM