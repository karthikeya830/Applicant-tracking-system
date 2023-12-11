import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TeamMemberForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [hr, setHr] = useState()
    const n = useNavigate()

    const handleSubmit = async (e) => {
        const userInfo = localStorage.getItem('userInfo');
        setHr(JSON.parse(userInfo)._id)
        console.log(hr)
        
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/team", {
                name,
                email,
                role,
                hr
            });
            n('/team')
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setErrorMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <form class="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                        Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="name" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="email@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="role">
                        Role
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="role" type="text" placeholder="Interviewer" required value={role} onChange={(e) => setRole(e.target.value)} />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add Team Member
                    </button>
                </div>
            </div>
        </form>

    );
};

export default TeamMemberForm;
