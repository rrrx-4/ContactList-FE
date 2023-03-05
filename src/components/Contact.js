import React from 'react'
import { useGlobalContext } from '../context';

const Contact = ({ data, handleEditContact }) => {

    const { deleteContact } = useGlobalContext()

    const { name, contactNo, _id } = data;

    const handleEdit = (id) => {

        handleEditContact(id);


    }


    const handleDelete = (id) => {

        if (window.confirm("Do you really want to Delete?")) {
            deleteContact(id);
        }



    }

    return (
        <div className='flex flex-row items-center justify-center gap-3' >
            <div className='w-[300px] tracking-widest  '>
                <h3 className='text-fuchsia-500 uppercase' >{name}:
                </h3>
                <h3 className='text-teal-300'>{contactNo}</h3>
            </div>
            <div>
                <button className=' font-medium text-yellow-400 hover:underline' onClick={() => handleEdit(_id)}  >Edit</button></div>
            <div>
                <button className=' font-medium text-red-400 hover:underline' onClick={() => handleDelete(_id)} >delete</button></div>
        </div>
    )
}

export default Contact