import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios'
import Kanban from '../Components/kanban';
import HiringTeam from '../Components/HiringTeam';
import SubJobDetails from '../Components/SubJobDetails';
import { useNavigate } from 'react-router-dom';


const JobDetails = () => {

    const { id } = useParams();

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        try {
            axios.get(`http://localhost:5000/api/jobs/${id}`).then((response) => {
                setData(response.data);
            })

        } catch (e) {
            console.log(e);
        }

    }, [id])

    console.log(data)
    const [activeTab, setActiveTab] = useState("candidates");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleClick = () => {
        navigate('/candidateForm/wertyui')
    }

    return (
        <div>
            <div className=' ml-5 p-5 flex gap-4 justify-between items-center'>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-400'>{data.department}</p>
                    <p className='text-4xl'>{data.title}</p>
                    <p> <span className='mr-5'>recruitment Quota : {data.recruitmentQuota}</span><span>{data.jobType}</span> </p>
                </div>
                <button onClick={handleClick} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-10">Publish Job</button>
            </div>
            <div className="flex flex-col">
                {/* <!--Tabs navigation--> */}
                <ul className="flex gap-10 mb-4 justify-center">
                    <li className="-mb-px mr-1">
                        <Link
                            className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 ${activeTab === "candidates" && "text-blue-700 font-bold"}`}
                            onClick={() => handleTabClick("candidates")}>Candidates</Link>
                    </li>
                    <li className="mr-1">
                        <Link className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 ${activeTab === "jobDetails" && "text-blue-700 font-bold"}`}
                            onClick={() => handleTabClick("jobDetails")}>Job Details</Link>
                    </li>
                    <li className="mr-1">
                        <Link className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 ${activeTab === "hiringTeam" && "text-blue-700 font-bold"}`}
                            onClick={() => handleTabClick("hiringTeam")}>Hiring Team</Link>
                    </li>
                </ul>
                <hr />
                {/* <!--Tabs content--> */}
                <div className="flex flex-col">
                    {activeTab === "candidates" && (
                        <div className="bg-white p-6 border-l border-r border-b">
                            <Kanban job={data} />
                        </div>
                    )}
                    {activeTab === "jobDetails" && (
                        <div className="bg-white p-6 border-l border-r border-b">
                            <SubJobDetails job={data} />
                        </div>
                    )}
                    {activeTab === "hiringTeam" && (
                        <div className="bg-white p-6 border-l border-r border-b">
                            <HiringTeam />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default JobDetails