import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import axios from 'axios'

const Nav = ({ data }) => {

    const [pic, setPic] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const handleDropdownToggle = () => {
        setIsDropdownOpen(prev => !prev);
    }

    const logout = () => {
        localStorage.removeItem("userInfo")
        window.location.href = "/"
    }


    return (
        <>
            <nav className="sticky right-0 bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <NavLink to="/dashboard" className="flex items-center">
                        <img src="Capture.png" className="h-8 mr-3" alt="cat" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RecruitFlow</span>
                    </NavLink>
                    <div className="flex md:order-2">

                        <div className="flex md:order-2">
                            <p className='text-xl' > Hi, <span>{data.firstName}</span> </p>
                            <button type="button" class="ml-4 flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" onClick={handleDropdownToggle}>
                                <span class="sr-only">Open user menu</span>
                                <img class="w-8 h-8 rounded-full" src={pic} alt="user" />
                            </button>
                            <div class={`z-50 ${isDropdownOpen ? '' : 'hidden'} my-4 mt-5 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow fixed dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
                                <div class="px-4 py-3">
                                    <span class="block text-sm text-gray-900 dark:text-white">{data.firstName}</span>
                                    <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{data.email}</span>
                                </div>
                                <ul class="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <Link to="/profile" class="text-center font-semibold block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="" class="text-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
                                    </li>
                                    <li>
                                        <button onClick={logout} class=" w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li >
                                <NavLink to="/dashboard" className="active:bg-violet-700  block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/jobs" className="  block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Jobs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/team" name="  block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Team</NavLink>
                            </li>
                            <li>
                                <NavLink to="/reports" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Reports</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/mailbox" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mailbox</NavLink>
                            </li> */}
                        </ul>


                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav

