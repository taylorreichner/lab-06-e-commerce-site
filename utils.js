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