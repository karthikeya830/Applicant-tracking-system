import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TeamMembersMain = () => {
    const teamMembers = [
        {
            id: 1,
            name: "John Doe",
            image: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
            id: 2,
            name: "Jane Doe",
            image: "https://randomuser.me/api/portraits/women/75.jpg",
        },
        {
            id: 3,
            name: "Bob Smith",
            image: "https://randomuser.me/api/portraits/men/76.jpg",
        },
        {
            id: 4,
            name: "Bob",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
        },
    ];
    const n = useNavigate()

    const [hr, setHr] = useState("")
    const [data, setData] = useState([])

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

    const handleview = ()=>{
        n('/team')
    }

    return (
        <div className="rounded overflow-hidden shadow-lg bg-white mr-4 max-h-fit h-auto pb-3">
            <div className="flex items-center justify-between px-6 py-4">
                <h2 className="font-bold text-lg">Team Members</h2>
                <button onClick={handleview} className="text-sm font-semibold text-gray-600 hover:text-gray-800">View All</button>
            </div>
            <hr></hr>
            <div className="p-1 h-60">
                {data.map((member) => (
                    <div key={member.id} className="flex items-center m-2 bg-slate-50 p-3 rounded hover:shadow-xl transition duration-300 cursor-pointer">
                        <img className="h-12 w-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rRNO0Gp65eZia4sIIT-zlbwY6Rb81Mx0Jr0RO5CrAAKwXzsN&s" alt={member.name}/>
                        <span className="ml-4 font-medium">{member.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembersMain;
