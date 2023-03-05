import React, { useState } from 'react'
import Formrow from '../components/Formrow'
import { useGlobalContext } from '../context'

const initalState = {

    name: "",
    email: "",
    password: "",
    isMember: true,

}

const Register = () => {

    const { loginUser, registerUser } = useGlobalContext()


    const [values, setValues] = useState(initalState);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {



        const value = e.target.value;
        const name = e.target.name;

        // console.log(value, name);

        setValues({ ...values, [name]: value });

    }

    const toggleForm = () => {
        const isMember = !values.isMember
        setValues({ ...values, isMember })
    }

    const onSubmit = (e) => {
        e.preventDefault();


        const { name, email, password, isMember } = values;

        if (!email || !password || (!isMember && !name)) {
            alert("Please fill out all fields")
            return;
        }

        if (isMember) {
            loginUser({ email, password });
            return;
        }

        registerUser({ name, email, password })

    }


    return (
        <div className='h-screen' >
            <div className='relative flex flex-col justify-center min-h-screen overflow-hidden' >
                <div className='w-full h-[400px] p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl' >
                    <h3 className='text-3xl font-semibold text-center text-purple-700 underline' >{values.isMember ? "Login" : "Register"}</h3>

                    <form onSubmit={onSubmit} className="mt-6" >



                        {!values.isMember && <Formrow name="name" type="text" value={values.name} handleChange={handleChange}   ></Formrow>}

                        <Formrow name="email" type="email" value={values.email} handleChange={handleChange}  ></Formrow>

                        <Formrow name="password" type="password" value={values.password} handleChange={handleChange}  ></Formrow>

                        <button className='m-5 w-1/3 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600' type='submit' disabled={isLoading} >{isLoading ? "Submitting" : "Submit"}</button>

                    </form>


                    <p className='  text-xs font-light text-center text-gray-700'>
                        {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
                        <button className=' font-medium text-purple-600 hover:underline' type="button" onClick={toggleForm}  >{values.isMember ? 'Register' : 'Login'}</button>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Register