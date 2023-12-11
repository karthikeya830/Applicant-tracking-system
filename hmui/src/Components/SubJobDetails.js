import React, { useState } from 'react';
import Modal from 'react-modal';
import UpdateJobPostForm from './Forms/UpdateJobPostForm';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import Alert from './Alert';


const SubJobDetails = ({ job }) => {

    const navigate = useNavigate()

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { id } = useParams();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState()
    const [showAlert, setShowAlert] = useState(false);

    const deleteJob = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const { data } = await axios.post(`http://localhost:5000/api/jobs/delete/${id}`, job , config)
            console.log(data);
            navigate('/jobs')
        }
        catch (err) {
            setError(err.response.data.message)
            setLoading(false)
        }
    }

    return (
        <div>
            {/* <UpdateJobPostForm /> */}

            <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col space-y-4">
                <div class="flex items-center space-x-2">
                    <h2 class="text-lg font-medium text-gray-900">Job Details</h2>
                    <span class="text-gray-400">(ID: {job._id.slice(0,5) })</span>
                </div>
                <hr />
                <div class="flex items-center space-x-2">
                    <span class="text-gray-400">Job Title:</span>
                    <h3 class="text-lg font-medium text-gray-900">{job.title}</h3>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-400">Department:</span>
                    <p class="text-gray-700">Engineering</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-400">Job Type:</span>
                    <p class="text-gray-700">{job.jobType}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-400">Experience:</span>
                    <p class="text-gray-700">{job.experience} years</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-400">Recruitment Quota:</span>
                    <p class="text-gray-700">{job.recruitmentQuota}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-400">Salary:</span>
                    <p class="text-gray-700">{job.salary}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-400">Location:</span>
                    <p class="text-gray-700">{job.location}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-400">Posted On:</span>
                    <p class="text-gray-700">{job.datePosted}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="text-gray-400">Information to Interviewer:</span>
                    <p class="text-gray-700">{job.InformationToInterviewer}</p>
                </div>
                <div class="flex justify-around items-center space-x-4">
                    <button onClick={() => setModalIsOpen(true)} class="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8V6a2 2 0 012-2h2"></path></svg>
                        <span>Edit</span>
                    </button>
                    <button onClick={deleteJob} class="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8V6a2 2 0 012-2h2"></path></svg>
                        <span>Delete</span>
                    </button>
                </div>

            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="modal">
                <div class="p-6 mx-auto bg-white rounded-xl shadow-md flex flex-col space-y-4">
                    <h2 class="text-lg font-medium text-gray-900">Edit Job</h2>
                    <UpdateJobPostForm job={job} setModalIsOpen={setModalIsOpen} />
                </div>
            </Modal>
        </div>
    )
}

export default SubJobDetails