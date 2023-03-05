import axios from 'axios'
import { getUserFromLS } from './userStorage';


const API = axios.create({

    baseURL: "http://localhost:3000"
})

API.interceptors.request.use((req) => {


    if (getUserFromLS()) {

        // console.log(JSON.parse(getUserFromLS()));

        req.headers.Authorization = `Bearer ${getUserFromLS()}`
    }

    return req
})



export const Login = (user) => API.post("users/signin", user);

export const Signup = (user) => API.post("users/signup", user);

export const getContacts = () => API.get("data/contacts");

export const createContact = (value) => API.post("data/create", value);

export const deleteContact = (id) => API.delete(`data/delete/${id}`);

export const editContact = (id, value) => API.patch(`data/edit/${id}`, value);

export const searchContact = (search) => API.get(`data/search?searchQuery=${search}`) 