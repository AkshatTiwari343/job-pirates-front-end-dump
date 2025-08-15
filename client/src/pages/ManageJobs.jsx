import React from 'react'
import {assets, manageJobsData} from '../assets/assets'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'

const ManageJobs = () => {
  
  const naivgate= useNavigate();

  return (
    <div className='container mx-auto p-4 max-w-5xl'>
      <div className='overflow-x-auto'>
        <table className='w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm '>
          <thead>
            <tr className='border-b'> 
              <th className='py-2 px-4 text-left max-sm:hidden'>#</th>
              <th className='py-2 px-4 text-left'>Job Title</th>
              <th className='py-2 px-4 text-left max-sm:hidden'>Published</th>
              <th className='py-2 px-4 text-left max-sm:hidden'>Location</th>
              <th className='py-2 px-4 text-center'>Applicants</th>
              <th className='py-2 px-4 text-left'>Visible</th>
            </tr>
          </thead>
          <tbody>
            {
              manageJobsData.map((job,index)=>(
                <tr key={index} className='text-gray-700'>
                  <td className='py-2 px-4 border-b max-sm:hidden'>{index+1}</td>
                  <td className='py-2 px-4 border-b'>{job.title}</td>
                  <td className='py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('ll')}</td>
                  <td className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
                  <td className='py-2 px-4 border-b text-center'>{job.applicants}</td>
                  <td className='py-2 px-4 border-b'>
                    <input className='scale-150 ml-4' type="checkbox" />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className='mt-4 flex justify-end'>
        <button className='bg-purple-600 border-purple-800 px-4 py-2 border rounded text-white hover:bg-purple-700 transition' onClick={() => naivgate('/dashboard/add-job')}> Add New Job</button>
      </div>
    </div>
  )
}

export default ManageJobs