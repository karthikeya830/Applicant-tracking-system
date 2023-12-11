import { useState } from 'react';

const JobPostForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [skills, setSkills] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='max-w-xl' >
            <h1 className='font-bold text-4xl text-center'>Create Job </h1>
            <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-md">
                <div className="mb-4">
                    <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">Company Name</label>
                    <input type="text" id="companyName" name="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                    <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
                    <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">Salary</label>
                    <input type="text" id="salary" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">Skills</label>
                    <input type="text" id="skills" name="skills" value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="deadline" className="block text-gray-700 font-bold ">DeadLine</label> <br />
                    <input type='date' value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                </div>
                <button type="submit" onClick={handleSubmit} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                    Submit
                </button>
            </form>
        </div>
    )
}


export default JobPostForm