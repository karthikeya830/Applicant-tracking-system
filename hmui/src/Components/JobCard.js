import React from 'react'
import { Link } from 'react-router-dom'

const JobCard = (props) => {

    const handleClick = () => {

    }

    return (
        // <div
        //     title="Job"
        //     className="w-fit bg-slate-10 flex flex-col items-center  pl-4 pr-4 modalShadow cursor-pointer m-2 relative rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-2xl transition duration-300"
        // >
        //     {/* <Link to={"/JobDetails"}> */}
        //     <div className=" w-full p-2 flex justify-between items-center ">
        //         <h2 className="heading3 inline font-medium">{props.title}</h2>
        //         <button className="inline float-right mr-4 p-2 w-20 rounded-full font-medium border-2 border-solid hover:bg-blue-700 hover:text-white">
        //             Delete
        //         </button>
        //     </div>
        //     <div className="w-full flex h-28">
        //         <div className="w-1/2 flex flex-col justify-center text-center">
        //             <div className="heading4">Total Candidates</div>
        //             <div className="heading4 font-medium">110</div>
        //         </div>

        //         <div className="w-1/2  flex flex-col justify-center text-center">
        //             <div className="heading4  ">Active Candidates</div>
        //             <div className="heading4 font-medium">12</div>
        //         </div>
        //         <div className="w-1/2 flex flex-col justify-center text-center">
        //             <div className="heading4  ">JOB-ID</div>
        //             <div className="heading4 font-medium">12</div>
        //         </div>
        //     </div>

        //     {/* PART TO SHOW SHARE JOB-ID AND SHARE BUTTONS */}

        //     <div className="flex flex-row w-full pb-4">


        //         <div className="flex justify-around items-center w-1/4">
        //             {/* <img src={DeleteIcon} alt="" className="inline w-4 h-4" />
        //     <img src={SocialIcon} alt="" className="inline w-4 h-4" /> */}
        //         </div>
        //     </div>
        //     {/* </Link> */}
        // </div>

        <div className='flex flex-col m-2 border-3 p-4 w-60 rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-2xl transition duration-300'>
            <p className='text-sm'>{props.dep}</p>
            <p className='text-xl font-bold font'>{props.title}</p>
            <p className='text-sm p-2'>Candidates:</p>
            <div className='flex flex-row justify-between p-5 bg-slate-100 rounded-xl font-semibold'>
                <div className='flex flex-col '>
                    <p>TOTAL</p>
                    <p className='text-xl'>10</p>
                </div>
                <div className='flex flex-col'>
                    <p>NEW</p>
                    <p className='text-xl'>6</p>
                </div>
            </div>
            <div className='flex flex-row justify-between p-2'>
                <p className='text-sm text-zinc-500'>requirement: {props.req} </p>
                <p className='text-sm text-zinc-500'>{props.jt}</p>

            </div>
            <hr />
            <Link to={`/jobs/${props.id}`} ><button onClick={handleClick} className=" text-sm hover:text-slate-400 items-end ml-20 mt-2">
                See Details {`>`}
            </button></Link>
        </div >
    )
}

export default JobCard