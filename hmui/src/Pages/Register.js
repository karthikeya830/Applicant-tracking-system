// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Loader from '../Components/Loader';
import Alert from '../Components/Alert';

const Register = ({ history }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({ firstname: "", lastname: "", email: "", password: "" })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState()

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")

        if (userInfo) {
            navigate('/dashboard')
        }
    }, [history, user, navigate]);

    let key, val;
    const handleInputs = (e) => {

        key = e.target.name;
        val = e.target.value;
        setUser({ ...user, [key]: val })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname , email , password } = user
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            setLoading(true)
            const { data } = await axios.post('http://localhost:5000/register', { firstname, lastname , email , password }, config)
            console.log(data);
            navigate('/')
            localStorage.setItem('userInfo', JSON.stringify(data))
            setLoading(false)
        }
        catch (err) {
            setError(err.response.data.message)
            setLoading(false)
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 text-left bg-white shadow-lg">
                    <div className="flex justify-center">
                        <img src='capture.png' height="100" width="100" alt="" />
                    </div>
                    <h3 className="text-2xl font-bold text-center">Create to your account</h3>
                    {error && <Alert message={error} />}
                    {loading && <Loader />}
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <div>
                                <label className="block" htmlFor="email">First Name</label>
                                <input type="text" name='firstname' value={user.firstname} onChange={handleInputs} placeholder="First Name" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block" htmlFor="email">Last Name</label>
                                <input type="text" name='lastname' value={user.lastname} onChange={handleInputs} placeholder="Last Name" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block" htmlFor="email">Email</label>
                                <input type="text" name='email' value={user.email} onChange={handleInputs} placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                <input type="password" name='password' value={user.password} onChange={handleInputs} placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></input>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button type='submit' className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create Account</button>
                                <Link to={'/login'} className="text-sm text-blue-600 hover:underline p-5">Already have an account?</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register