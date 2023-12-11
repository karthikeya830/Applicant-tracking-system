import React, { useState } from 'react';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        education: '',
        resume: '',
        coverLetter: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, e.g., send data to the server.
        console.log(formData);
    };

    return (
        <div className="container mx-auto p-4 flex justify-center">
            <div>
                <h2 className="text-3xl font-semibold mb-4">Application Form</h2>
                <form onSubmit={handleSubmit} className="max-w-md">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                            Education
                        </label>
                        <input
                            type="text"
                            id="education"
                            name="education"
                            value={formData.education}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                            Resume
                        </label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            accept=".pdf, .doc, .docx"
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                            Cover Letter
                        </label>
                        <textarea
                            id="coverLetter"
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;
