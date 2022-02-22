let list_cart = localStorage.getItem('cart');

list_cart = list_cart.split(',')

export const add_to_cart = (id) => {
    list_cart.push(id);
    localStorage.setItem('cart',list_cart)
}