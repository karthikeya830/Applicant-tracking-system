import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Team = () => {

    const n = useNavigate()

    const [data, setData] = useState([])
    const [hr, setHr] = useState("")

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setHr(JSON.parse(userInfo)._id)

            axios.get(`http://localhost:5000/api/team/${hr}`, hr)
                .then((response) => {
                    // Handle the response data
                    setData(response.data.teamMembers)
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [hr])

    // Make a GET request to fetch team members
    const handleclick = () => {
        n('/team/add')
    }

    const deleteTeam = async (id) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.delete(`http://localhost:5000/api/team/${id}`, config)
            console.log(data);
            window.location.reload()
        }
        catch (err) {
        }
    }


    return (
        <div className='m-5'>
            <div className='flex justify-between p-5 m-5'>
                <p className='text-3xl'>Team Members</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleclick}>Add Team Member</button>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item) => (
                        <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300" key={item._id} >

                            <div className='flex justify-between'>
                                <div className="flex items-center p-4">
                                    <img className="h-16 w-16 rounded-full" src={item.avatarUrl} alt={item.name} />
                                    <div className="ml-4">
                                        <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                                        <p className="text-gray-600">{item.role}</p>
                                    </div>

                                </div>
                                <button onClick={() => deleteTeam(item._id)} class="inline-flex h-fit w-fit m-5 p-3 hover:bg-slate-200 text-white text-sm font-medium rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" text-black h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                            <div className="px-4 py-2">
                                <p className="text-gray-700">{item.email}</p>
                                <p className="text-gray-500 text-sm">
                                    Joined on {new Date(item.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Team