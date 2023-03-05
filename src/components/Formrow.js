import React from 'react'

const Formrow = ({ name, type, handleChange, value, }) => {

    // const [value, setValue] = useState("");


    return (
        <div>

            <label className=" text-base   mr-3 font-semibold text-gray-800" htmlFor={name} >{name}</label>
            <input className=" border-b-slate-400 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type={type} id={name} name={name} value={value} onChange={handleChange}></input>


        </div>
    )
}

export default Formrow