import React, { useState } from 'react'
import Contact from '../components/Contact';
import Formrow from "../components/Formrow";
import { useGlobalContext } from '../context';

const initialState = {
    name: "",
    number: "",
    id: ""
}



const ContactList = () => {

    const { createContact, contacts, editContact, searchContact } = useGlobalContext();

    // console.log(contacts);

    // const [contacts, setContacts] = useState([]);

    const [value, setValue] = useState(initialState);

    const [isEditing, setIsEditing] = useState(false);

    const [search, setSearch] = useState("");

    const handleChange = (e) => {

        const name = e.target.name;
        const resp = e.target.value;

        // console.log(value);

        setValue({ ...value, [name]: resp })

    }

    const onSubmit = (e) => {

        e.preventDefault();

        const { name, number } = value;

        console.log(value.name, number);

        if (!name || !number) {
            alert("Filled cant be empty");
            return;
        }

        if (isEditing) {
            editContact(value.id, value);
            setIsEditing(false)
            setValue(initialState)
            return;
        }

        createContact(value);

        setValue(initialState)

    }

    const handleEditContact = (id) => {

        setIsEditing(true);

        const editContact = contacts.find(data => data._id === id);



        const { name, contactNo } = editContact;

        setValue({ name, number: contactNo, id });

    }

    const handleSChange = (e) => {

        setSearch(e.target.value);

    }

    const handleSearch = () => {

        searchContact(search);

        setSearch("");
    }


    return (
        <div>

            <div className='flex flex-row items-center justify-around sticky top-0 z-50  bg-blue-300' >
                <form onSubmit={onSubmit} className="" >

                    <div className='flex flex-row gap-5 justify-center items-start p-3 ' >

                        <div>
                            <Formrow name="name" type="text" value={value.name} handleChange={handleChange} ></Formrow>
                        </div>
                        <div>
                            <Formrow name="number" type="number" value={value.number} handleChange={handleChange} ></Formrow>
                        </div>
                        <div className='my-auto inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 bg-blue-600' >
                            <button type='submit' > {isEditing ? "Edit Contact" : "Add Contact"} </button>
                        </div>
                    </div>
                </form>

                <div className='flex flex-row items-center justify-center'>
                    <input className=" border-b-slate-400 px-4 py-2 mt-2 mr-3 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" value={search} onChange={handleSChange} ></input>
                    <button className='my-auto inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 bg-blue-600' onClick={handleSearch} >search</button>
                </div>

            </div>
            <div className='relative bg-white ' >
                {contacts.length > 0 && (
                    contacts.map((data) => {

                        return (
                            <div className='flex  items-center justify-center  border-b-2 h-[80px]'>
                                <div>
                                    <Contact key={data._id} data={data} handleEditContact={handleEditContact} ></Contact>
                                </div>
                            </div>
                        )

                    }))
                }
            </div>
        </div>
    )
}

export default ContactList