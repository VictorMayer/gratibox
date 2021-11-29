import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL === "prod" ? /*put deploy link*/"" : "http://localhost:4000";

function createConfig(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}

function createSubscriptionBody(input) {
    const body = {
        user_id: input.user.id,
        address: input.address,
        monthly: input?.monthly,
        weekly: input?.weekly,
        delivery_date: input.delivery,
        categories: input.products,
    }
    return body;
}

function sendNewUser(body) {
    return axios.post(`${BASE_URL}/sign-up`, body);
}

function  getUser(body) {
    return axios.post(`${BASE_URL}/sign-in`, body);
}

function getStates(token) {
    return axios.get(`${BASE_URL}/subscription/states`, createConfig(token));
}

function sendSubscription(body) {
    const { token } = body.user;
    return axios.post(`${BASE_URL}/subscription/`, createSubscriptionBody(body), createConfig(token));
}

export {
    sendNewUser,
    getUser,
    getStates,
    sendSubscription,
}
