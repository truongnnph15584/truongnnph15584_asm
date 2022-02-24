import instance from "./config";

export const new_order = (order) => {
    const url = "/orders";
    return instance.post(url,order);
}
export const getall_orders = () =>{
    const url = "/orders";
    return instance.get(url);
}
export const get_order = (id) => {
    const url = `/orders/${id}`;
    return instance.get(url);
}

export const update_order = (order) => {
    const url = `/orders/${order.id}`;
    return instance.put(url, order);
}

// export const update_status_orders = (new_status) =>{
//     const url = "/orders";
//     return instance.get(url);
// }