import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '../Components/Alert';
import Loader from '../Components/Loader';

const AddJob = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState()
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        department: "",
        jobType: "",
        experience: "",
        recruitmentQuota: "",
        salary: "",
        location: "",
        hrId:userInfo._id ,
        informationToInterviewer: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            setLoading(true)
            const { data } = await axios.post('http://localhost:5000/api/jobs/create', formData , config)
            console.log(data);
            setLoading(false)
            setShowAlert(true)
            navigate("/jobs")
        }
        catch (err) {
            setError(err.response.data.message)
            setLoading(false)
        }
    };

    return (
        <div className="w-fit mx-auto">
            {loading && <Loader />}
            {error && alert("error")}
            <Alert show={showAlert} message="This is an alert!" />
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <p className='text-3xl text-center mb-5'>Create New Job</p>
                <hr></hr>
                <div className='mt-5 flex gap-10 items-center'>
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="jobTitle">
                                Job Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="jobTitle"
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Enter job title"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="jobDescription">
                                Job Description
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="jobDescription"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Enter job description"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-5'>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="department">
                                    Department
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="department"
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    placeholder="Enter department"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="jobType">
                                    Job Type
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="jobType"
                                    name="jobType"
                                    value={formData.jobType}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select job type</option>
                                    <option value="fullTime">Full-time</option>
                                    <option value="partTime">Part-time</option>
                                    <option value="contract">Contract</option>
                                    <option value="internship">Internship</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className="mb-4">
                                <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">
                                    Experience (in years)
                                </label>
                                <input
                                    type="number"
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter experience in years"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="recruitment_quota" className="block text-gray-700 font-bold mb-2">
                                    Recruitment Quota
                                </label>
                                <input
                                    type="number"
                                    name="recruitmentQuota"
                                    id="recruitmentQuota"
                                    value={formData.recruitmentQuota}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter recruitment quota"
                                    required
                                />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className="mb-4">
                                <label htmlFor="expectedSalary" className="block text-gray-700 font-bold mb-2">
                                    Salary (in Rupees)
                                </label>
                                <input
                                    type="number"
                                    id="salary"
                                    name="salary"
                                    value={formData.salary}
                                    onChange={handleInputChange}
                                    placeholder="Enter salary"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    min="0"
                                    step="2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    placeholder="Enter job location"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="interviewerInfo"
                            >
                                Information for Interviewer:
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="informationToInterviewer"
                                name="informationToInterviewer"
                                value={formData.informationToInterviewer}
                                onChange={handleInputChange}
                                placeholder="Enter information for interviewer here..."
                                rows="4"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <button
                    className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>


            </form>
        </div>
    )
}



export default AddJob