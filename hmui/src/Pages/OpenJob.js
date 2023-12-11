import React from 'react'
import Kanban from '../Components/kanban'
import JobSearchSideBar from '../Components/Forms/JobSearchSideBar'

const OpenJob = () => {
  return (
    <div className="flex flex-row p-5">
        <div className='basis-1/4 rounded-lg'>
        <JobSearchSideBar />
        </div>
        <div className='basis-3/4' >
          <div className='m-2 h-10 bg-slate-100 pl-2 text-2xl'>
            Jobs <span>(10)</span>
          </div>
          <div className='' >
            <Kanban/>
          </div>
        </div>
      </div>
  )
}

export default OpenJob