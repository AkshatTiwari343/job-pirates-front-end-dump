import React, { useContext , useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import {AppContext} from '../context/AppContext'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { assets} from '../assets/assets';
import moment from 'moment';
import JobCard from '../components/JobCard';
import Footer from '../components/Footer';
const ApplyJob = () => {
  const {id}= useParams();
  const [jobData, setJobData] = useState(null);

  const {jobs} = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter(job => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  }

  useEffect(() => {
    if(jobs.length>0)
      fetchJob();
  }, [id, jobs]);
  
  return jobData ? (
    <div>
      <Navbar />
      <div className='min-h-screen flex flex-col py-10 container px-4 mx-auto 2xl:px-20'>
        <div className='bg-white text-black rounded w-full'>
          <div className='flex md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-purple-50 border border-purple-400 rounded-xl'>
            <div className='flex flex-col md:flex-row items-center'>
              <img className="h-24 bg-white rounded-lg p-4 mr-4 md:mb-4 border"src={jobData.companyId.image} alt="" />
              <div className='text-center md:text-left text-neutral-700 '>
                <h1 className='text-3xl font-semibold'>{jobData.title}</h1>
                <div className='flex flex-row flex-wrap max-md: justify-center gap-y-2 gap-6 text-gray-600 mt-2'>
                  <span className="flex items-center gap-4 text-sm text-gray-500 md:flex-row flex-col">
                    <span className='flex items-center gap-1 '>
                      <img src={assets.suitcase_icon} alt="job" />
                      {jobData.companyId.name}
                    </span>
                    <span className='flex items-center gap-1'>
                      <img src={assets.location_icon} alt="loaction" />
                      {jobData.location}
                    </span>
                    <span className='flex items-center gap-1'>
                      <img src={assets.person_icon} alt="level" />
                      {jobData.level}
                    </span>
                    <span className='flex items-center gap-1'>
                      <img src={assets.money_icon} alt="ctc" />
                      CTC: {jobData.salary/ 1000}k
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center'>
              <button className='bg-purple-600 p-2.5 px-10 text-white rounded'>Apply Now</button>
              <p className='mt-1 text-gray-600'>Posted {moment(jobData.date).fromNow()}</p>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-between items-start'>
            <div className='w-full lg:w-2/3'>
              <h2 className='font-bold text-2xl mb-4'>Job Description</h2>
              <div dangerouslySetInnerHTML={{__html: jobData.description}} className='tiwari-text'>
                
              </div>
              <button className='bg-purple-600 p-2.5 px-10 text-white rounded mt-10'>Apply Now</button>
            </div>
            {/* Sidebar for related jobs Card */}
            <div className='w-full lg:w-1/3 mx-auto mt-10 lg:mt-0 lg:ml-10 space-y-5'>
              <h2 className='text-xl text-gray-700 font-semibold'>More Jobs from {jobData.companyId.name}</h2>
              {jobs.filter(job => job.companyId._id === jobData.companyId._id && job._id !== jobData._id).filter(job => true).slice(0,4).map((job,index)=> <JobCard key={index} job={job}/>)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loading />
  );
}

export default ApplyJob;