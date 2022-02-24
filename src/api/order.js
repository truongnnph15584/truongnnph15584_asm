import instance from "./config";

export const getall_users = () => {
    const url = "/users";
    return instance.get(url);
}

export const register_user = (user) => {
    const url = '/register';
    return instance.post(url, user);
}
export const login_user = (user) => {
    const url = '/login'
    return instance.post(url, user);
}