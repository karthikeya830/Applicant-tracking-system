import React from 'react';

const Profile = ({ user }) => {
    return (
        <div className="p-5">
            <div className="p-8 bg-white shadow mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                        <div>
                            <p className="font-bold text-gray-700 text-xl">HR Manager</p>
                            <p className="text-gray-400">Company Name</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">Location</p>
                            <p className="text-gray-400">City, Country</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">Experience</p>
                            <p className="text-gray-400">10+ years</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                        <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Edit</button>
                        <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Delete Account</button>
                    </div>
                </div>
                <div className="mt-20 text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">{user.firstName} {user.lastName}, <span className="font-light text-gray-500"></span></h1>
                    <p className="font-light text-gray-600 mt-3">New York, USA</p>
                    <p className="mt-8 text-gray-500">HR Manager - XYZ Corporation</p>
                    <p className="mt-2 text-gray-500">HR Certification Institute</p>
                </div>
                <div className="mt-12 flex flex-col justify-center">
                    <p className="text-gray-600 text-center font-light lg:px-16">
                    {user.firstName} is an experienced HR manager with a strong background in talent acquisition, employee relations, and HR strategy. He has over 10 years of experience in the HR field and is dedicated to promoting a positive work environment within the organization. John is passionate about helping companies find the right talent and create a harmonious workplace.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
