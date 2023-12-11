import React from 'react'
import JobSummary from '../Components/JobPie'
import TeamMembersMain from '../Components/TeamMembersSection/TeamMembersMain'
import HiringPipeline from '../Components/Hiring Pipeline/HiringPipeline'
import Tasks from '../Components/Tasks'

const DashBoard = () => {
  return (
    <>
      <div className='bg-slate-50'>
        <div className='flex pl-5 pt-1 pb-1 '>
        </div>
        <div className="flex flex-row p-1">
          <div className='basis-2/3 rounded-lg'>
            <HiringPipeline />
          </div>
          <div className='basis-1/3' >
            <JobSummary />
          </div>
        </div>
        <div className="flex flex-row p-1">
          <div className='basis-2/3 rounded-lg'>
            <Tasks />
          </div>
          <div className='basis-1/3' >
            <TeamMembersMain />
          </div>
        </div>


      </div>
    </>
  )
}

export default DashBoard