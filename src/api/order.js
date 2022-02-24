import instance from "./config";

export const new_order = (order) => {
    const url = "/orders";
    return instance.post(url,order);
}
export const getall_orders = () =>{
    const url = "/orders";
    return instance.get(url);
}

export const getall_orders = () =>{
    const url = "/orders";
    return instance.get(url);
}