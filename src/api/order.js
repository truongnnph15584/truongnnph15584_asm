import instance from "./config";

export const new_order = (order) => {
    const url = "/orders";
    return instance.post(url,order);
}
