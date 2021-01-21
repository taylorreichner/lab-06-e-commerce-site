export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }

}

export function calcItemTotal(cartItem, game) {
    return cartItem.quantity * game.price;
}



export function calcOrderTotal(cart, games) {

let total = 0;

for (let item of cart) {
    const game = findById(item.id, games);

    const totalForThisGame = calcItemTotal(item, game);

    total = total + totalForThisGame;
}
return total;
}