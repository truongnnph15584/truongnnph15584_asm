import instance from "./config";

export const getall_products = () =>{
    const url = '/products'
    return instance.get(url);
}

export const get_product = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const update_product = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}
export const remove_products = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}

export const add_product = (product) => {
    const url = `/products`;
    return instance.post(url, product);
}

// export const getproduct_withcate = () =>{
//     const url = '/products?_expand=categoryProducts';
//     return instance.get(url);
// }


export const getproduct_withcate = () =>{
    const url = '/categoryProducts?_embed=products';
    return instance.get(url);
}