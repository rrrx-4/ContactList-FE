import React, { useState, useEffect, createContext, useContext } from 'react'
import { getUserFromLS, setUserToLS } from './utils/userStorage';
import * as api from "./utils/api"

const AppContext = createContext();


const AppProvider = ({ children }) => {

    const [user, setUser] = useState(getUserFromLS);

    const [contacts, setContacts] = useState([]);


    const loginUser = async (user) => {

        const response = await api.Login(user);

        console.log(response);

        setUserToLS(response.data.token);

        setUser(getUserFromLS);

        // return response;

    }

    const registerUser = async (user) => {

        const response = await api.Signup(user);

        console.log(response);

        setUserToLS(response.data.token);
        setUser(getUserFromLS);

        return response;

    }

    const getContacts = async () => {

        const resp = await api.getContacts();

        // console.log(resp.data);
        setContacts(resp.data)

    }

    const createContact = async (value) => {
        console.log(value);
        const resp = await api.createContact(value);

        getContacts()
        // console.log(resp);
    }

    const deleteContact = async (id) => {
        const resp = await api.deleteContact(id);

        getContacts();
    }

    const editContact = async (id, value) => {
        const resp = await api.editContact(id, value);

        getContacts();
    }

    const searchContact = async (search) => {
        const resp = await api.searchContact(search);

        if (resp.data.length === 0) {
            getContacts();
        }

        setContacts(resp.data);
    }


    if (user) {

        // console.log(user);

    }


    useEffect(() => {

        if (user) {
            const contacts = getContacts();

            // console.log(contacts);
            // setContacts(contacts);

        }


    }, [user])


    return <AppContext.Provider value={{ createContact, registerUser, loginUser, user, contacts, deleteContact, editContact, searchContact }}>{children}</AppContext.Provider>

}


const useGlobalContext = () => {

    return useContext(AppContext);

}

export { useGlobalContext };

export default AppProvider;