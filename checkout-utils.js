const CHECKOUT = 'CHECKOUT';
const defaultEmptyCheckout = [];
import { findById } from './utils.js';

export function getCheckout() {
    const stringyCheckout = localStorage.getItem(CHECKOUT);

    if (stringyCheckout) {
        const parsedCheckout = JSON.parse(stringyCheckout);

        return parsedCheckout;
   
    } else {
        const stringyDefaultCheckout = JSON.stringify(defaultEmptyCheckout);

        localStorage.setItem(CHECKOUT, stringyDefaultCheckout);

        return defaultEmptyCheckout;
    }
}  

export function clearCheckout() {
    const stringyDefaultCheckout = JSON.stringify(defaultEmptyCheckout);

    localStorage.setItem(CHECKOUT, stringyDefaultCheckout);
}

export function setCheckout(checkout) {
    const stringyCheckout = JSON.stringify(checkout);

    localStorage.setItem(checkout, stringyCheckout);
}


export function addToCheckout(id) {
    
    const checkout = getCheckout();

    const checkoutItem = findById(id, checkout);

    if (checkoutItem) {
        checkoutItem.quantity++;
    } else {
        const newItem = {
            id: id,
            quantity: 1
        };
        checkout.push(newItem);
    }    

}