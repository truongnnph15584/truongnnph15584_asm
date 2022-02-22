import instance from "./config";

export const getall_categories = () =>{
    const url = '/categoryProducts'
    return instance.get(url);
}
export const remove_category = (id) => {
    const url = `/categoryProducts/${id}`;
    return instance.delete(url);
}

export const add_category = (cate) => {
    const url = `/categoryProducts`;
    return instance.post(url,cate);
}

export const get_category = (id) => {
    const url = `/categoryProducts/${id}`;
    return instance.get(url);
}

export const update_category = (cate) => {
    const url = `/categoryProducts/${cate.id}`;
    return instance.put(url,cate);
}