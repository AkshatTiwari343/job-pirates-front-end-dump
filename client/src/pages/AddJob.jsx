import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import { JobCategories, JobLevels, JobLocations } from '../assets/assets';

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Beginner Level');
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' });
    }
  }, []);

  return (
    
      <form className="w-full max-w-4xl gap-4 p-4 flex flex-col items-start" action="">
        
        {/* Job Title */}
        <div className="w-full ">
          <h2 className="text-xl font-medium">Job Title</h2>
          <input
            className="border rounded mt-2 w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-purple-500 px-3 py-2"
            type="text"
            placeholder="Type here"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>

        {/* Job Description */}
        <div className="w-full max-w-lg">
          <h2 className="text-xl font-medium">Job Description</h2>
          <div
            ref={editorRef}
            
          ></div>
        </div>

        {/* Dropdown Row */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-5 gap-y-4 mt-6 w-full">
          {/* Category */}
          <div className="w-full sm:flex-1">
            <h2 className="text-xl mb-2 font-medium">Job Category</h2>
            <select
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {JobCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="w-full sm:flex-1">
            <h2 className="text-xl mb-2 font-medium">Job Location</h2>
            <select
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            >
              {JobLocations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Level */}
          <div className="w-full sm:flex-1">
            <h2 className="text-xl mb-2 font-medium">Job Level</h2>
            <select
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setLevel(e.target.value)}
              value={level}
            >
              {JobLevels.map((level, index) => (
                <option key={index} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Salary */}
        <div className="mt-8">
          <h2 className="text-xl mb-3 font-medium">Salary</h2>
          <input
            className="border w-full sm:w-auto max-w-[150px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
            type="number"
            placeholder="0"
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
            min={0}
          />
        </div>

        {/* Submit */}
        <button
          className="bg-purple-600 border-purple-800 mt-8 px-8 py-2 border rounded text-white hover:bg-purple-700 transition"
          type="submit"
        >
          ADD
        </button>
      </form>
  );
};

export default AddJob;
