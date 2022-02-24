



let list_cart = [];
if (localStorage.getItem('cart')) {
    list_cart = JSON.parse(localStorage.getItem('cart'))
}


export const add_to_cart = (product) => {
    const existProduct = list_cart.find(item => item.id === product.id);
    if (!existProduct) {
        list_cart.push(product)
    } else {
        existProduct.quantity += product.quantity
    }
    localStorage.setItem('cart', JSON.stringify(list_cart))
}
export const remove_Item_cart = (id) => {
    list_cart = list_cart.splice(list_cart.indexOf(id));
    localStorage.setItem('cart', JSON.stringify(list_cart))
}

export const increaseQuantity = (id) => {
    list_cart.find(item => item.id === id).quantity++;
    localStorage.setItem('cart', JSON.stringify(list_cart));
    return list_cart.find(item => item.id === id).quantity;
}
export const prveQuantity = (id) => {
    list_cart.find(item => item.id === id).quantity--;
    localStorage.setItem('cart', JSON.stringify(list_cart));
    return list_cart.find(item => item.id === id).quantity;
}