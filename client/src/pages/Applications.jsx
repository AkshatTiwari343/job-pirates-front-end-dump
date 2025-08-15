import React, { useState } from 'react'
import NavBar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets';
import moment from 'moment';
import Footer from '../components/Footer';

const Applications = () => {
  const [isEdit, setIsEdit]= useState(false);
  const [resume, setResume] = useState(null);

  return (
    <div  className='bg-gray-50 min-h-screen'>
      <NavBar />
      <div className='container mx-auto mb-20'>
      {/* resume functionality */}
      <div className='container mx-auto py-10 flex flex-col items-start justify-start gap-3'>
        <h1 className='text-gray-700 text-xl flex font-semibold'>Your Resume</h1>
        <div className='flex items-center gap-3 mb-6 mt-3'>
          {isEdit ? (
            <>
              <label className='flex items-center' htmlFor="resumeUpload">
                <p className='bg-[#9333ea17] text-purple-600 px-4 py-1.5 rounded-lg mr-3'>Select Resume</p>
                <input
                  id='resumeUpload'
                  onChange={e => setResume(e.target.files[0])}
                  type="file"
                  accept='application/pdf'
                  hidden
                />
                <img src={assets.profile_upload_icon} alt="upload" />
              </label>
              <button
                onClick={e => setIsEdit(false)}
                className='bg-[#14b8a6] p-2.5 px-10 text-white rounded'
              >
                Save
              </button>
            </>
          ) : (
            <div className='flex items-center gap-3'>
              <a className='flex items-center gap-2.5 bg-[#9333ea10] border-2 border-purple-500 px-4 py-1.5 rounded cursor-pointer'>
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className='flex items-center gap-2.5 bg-white border-2 border-gray-300 px-4 py-1.5 rounded text-gray-500'
              >
                Edit
              </button>
              {/* <img className="cursor-pointer"src={assets.profile_upload_icon} alt="" /> */}
            </div>
          )}
        </div>
      </div>
      <div>
        {/* Applied Jobs Section */}
        <h1 className='container mx-auto flex items-start justify-start text-xl font-semibold mb-4 py-5'>Applied Jobs</h1>
        <table className="bg-white border rounded-lg container mx-auto border-collapse border-spacing-0 mt-4">
          <thead className="text-sm">
            <tr>
              <th className="py-1.5 px-3 border-b text-left">Company</th>
              <th className="py-1.5 px-3 border-b text-left">Job Title</th>
              <th className="py-1.5 px-3 border-b text-left max-sm:hidden">Applied On</th>
              <th className="py-1.5 px-3 border-b text-left max-sm:hidden">Location</th>
              <th className="py-1.5 px-3 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) => (
              <tr key={index}>
                <td className="py-1.5 px-3 flex items-center gap-2 border-b">
                  <img className="w-8 h-8" src={job.logo} alt="" />
                  {job.company}
                </td>
                <td className="px-3 py-1.5 border-b">{job.title}</td>
                <td className="px-3 py-1.5 border-b max-sm:hidden">
                  {moment(job.date).format("ll")}
                </td>
                <td className="px-3 py-1.5 border-b max-sm:hidden">{job.location}</td>
                <td className="px-3 py-1.5 border-b">
                  <span className={`${job.status === 'Pending' ? 'bg-purple-100 text-purple-600' : job.status === 'Rejected' ? 'bg-red-100 text-red-600' : 'bg-teal-100 text-teal-600'} px-3 py-1 rounded text-xs`}>
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Applications;