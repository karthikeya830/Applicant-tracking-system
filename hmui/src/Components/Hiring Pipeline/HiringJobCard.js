import React from 'react'

const HiringJobCard = (props) => {
  
    return (
    
    <div className='flex justify-evenly items-center'>
        <div className='m-5 w-40'>
          <p className='text-md font-semibold'>{props.job.title}</p>
          <p className='text-sm'>Total Applications : 10</p>
        </div>
        <div className='bg-slate-100 p-5 rounded-md w-40 h-16 hover: shadow-md' >Candidates:5</div>
        <div className='bg-slate-100 p-5 rounded-md w-40 h-16 hover: shadow-md' >Candidates:6</div>
        <div className='bg-slate-100 p-5 rounded-md w-40 h-16 hover: shadow-md' >Candidates:2</div>
        <div className='bg-slate-100 p-5 rounded-md w-40 h-16 hover: shadow-md' >Candidates:1</div>
    </div>
  )
}

export default HiringJobCard