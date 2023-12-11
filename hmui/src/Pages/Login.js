// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Loader from '../Components/Loader';
import Alert from '../Components/Alert';

const Login = ({history}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({ email: "", password: "" })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState()

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")
        if( userInfo ){
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
        const { email, password } = user
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            setLoading(true)
            const { data } = await axios.post('http://localhost:5000/api/users/login',{ email, password}, config)
            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data))
            setLoading(false)
            window.location.reload()
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
                    <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                    {error && <Alert message = {error} />}
                    {loading && <Loader />}
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <div>
                                <label className="block" htmlFor="email">Email</label>
                                <input type="text" name='email' value={user.email} onChange={handleInputs} placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                <span className="text-xs tracking-wide text-red-600">Email field is required </span>
                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                <input type="password" name='password' value={user.password} onChange={handleInputs} placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></input>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button type='submit' className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                                <p href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login