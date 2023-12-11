import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Tasks = () => {
    const navigate = useNavigate();
    const handleOnclick = () => {
        navigate('/jobs')
    }

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState()

    useEffect(() => {
        try {
            setLoading(true)
            axios.get('http://localhost:5000/api/jobs/').then((response) => {
                setData(response.data);
            })
            setLoading(false)
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <div className="rounded overflow-hidden shadow-lg bg-white m-4 mt-0">
            <div className="flex items-center justify-between px-6 py-4">
                <h2 className="font-bold text-lg font-sans">Tasks</h2>
                <button className="text-sm font-semibold text-gray-600 hover:text-gray-800" onClick={handleOnclick}>View All</button>
            </div>
            <hr></hr>
            <div className="">

                {/* <div class=" sm:rounded-lg">
                    <table class="w-full text-sm text-gray-500 h-fit pb-5 overflow-hidden hover:shadow-4xl transition duration-300">
                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">Jobs</th>
                                <th scope="col" class="px-6 py-3">Applied</th>
                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">Screening</th>
                                <th scope="col" class="px-6 py-3">Interview</th>
                                <th scope="col" class="px-6 py-3">Hired</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                // <HiringJobCard job={item} />
                                <tr class="border-b">
                                    <th scope="row" class="font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 hover:shadow-4xl transition duration-300">
                                    <div className=' w-full m-2 p-3 hover:shadow-4xl transition duration-300'>
                                            <p className='font-semibold'>{item.title}</p>
                                            <p className='text-sm'>Total applications:10</p>
                                        </div>
                                    </th>
                                    <td class="p-5 text-center cursor hover:shadow-4xl transition duration-300"> Candidates : 10 </td>
                                    <td class="p-5 text-center"> Candidates : 10 </td>
                                    <td class="p-5 text-center"> Candidates : 10 </td>
                                    <td class="p-5 text-center"> Candidates : 10 </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div> */}
                {data.map((item) => (
                    <div class="flex bg-slate-100 p-8 m-2">
                        <div class="basis-1/4 w-20 font-bold text-gray-600">10:00 AM - 11:00 AM</div>
                        <div class="basis-3/4 w-40 font-bold text-gray-600">Interview for  {item.title} is scheduled</div><span><input className="h-5 w-5" type="radio"/> </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;
