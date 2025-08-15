import { useEffect, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLevels, JobLocations } from '../assets/assets';
import JobCard from './JobCard';

const JobListing = () => {
    const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);

    const [showFilters, setShowFilters] = useState(false); // fixed naming
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState([]);

    const [filterJobs, setFilterJobs] = useState(jobs);

    const handleCategoryChange = (category) => {
        setSelectedCategory(prev =>
            prev.includes(category)
                ? prev.filter(item => item !== category)
                : [...prev, category]
        );
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(prev =>
            prev.includes(location)
                ? prev.filter(item => item !== location)
                : [...prev, location]
        );
    };

    const handleLevelChange = (levels) => {
        setSelectedLevel(prev =>
            prev.includes(levels)
                ? prev.filter(item => item !== levels)
                : [...prev, levels]
        );
    };

    useEffect(() => {
        const matchesCategory = job => selectedCategory.length === 0 || selectedCategory.includes(job.category);
        const matchesLocation = job => selectedLocation.length === 0 || selectedLocation.includes(job.location);
        const matchesLevel = job => selectedLevel.length === 0 || selectedLevel.includes(job.level);

        const matchesTitle = job => searchFilter.title === '' || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
        const matchesSearchLocation = job => searchFilter.location === '' || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

        const newFilteredJobs = jobs.slice().reverse().filter(
            job => matchesCategory(job) &&
                   matchesLocation(job) &&
                   matchesLevel(job) &&
                   matchesTitle(job) &&
                   matchesSearchLocation(job)
        );

        setFilterJobs(newFilteredJobs);
        setCurrentPage(1);

    }, [jobs, selectedCategory, selectedLocation, selectedLevel, searchFilter]);

    return (
        <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row gap-8 py-8'>
            <div className='w-full lg:w-1/4 bg-grey-100 px-4'>
                {isSearched && (searchFilter.title !== '' || searchFilter.location !== '') && (
                    <>
                        <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                        <div className='mb-4 text-gray-600 flex flex-wrap gap-2 w-full'>
                            {searchFilter.title && (
                                <span className='inline-flex items-center gap-2.5 bg-[#9333ea33] border border-purple-200 px-4 py-1.5 rounded'>
                                    {searchFilter.title}
                                    <img
                                        onClick={() => setSearchFilter(prev => ({ ...prev, title: '' }))}
                                        className='cursor-pointer'
                                        src={assets.cross_icon}
                                        alt="cross icon"
                                    />
                                </span>
                            )}
                            {searchFilter.location && (
                                <span className='inline-flex items-center gap-2.5 bg-[#9333ea33] border border-purple-200 px-4 py-1.5 rounded'>
                                    {searchFilter.location}
                                    <img
                                        onClick={() => setSearchFilter(prev => ({ ...prev, location: '' }))}
                                        className='cursor-pointer'
                                        src={assets.cross_icon}
                                        alt="cross icon"
                                    />
                                </span>
                            )}
                        </div>
                    </>
                )}

                <button
                    onClick={() => setShowFilters(prev => !prev)}
                    className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'
                >
                    {showFilters ? "Close" : "Filters"}
                </button>

                {/* Search by Categories */}
                <div className={showFilters ? "" : "max-lg:hidden"}>
                    <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {JobCategories.map((category, index) => (
                            <li className='flex gap-3 items-center' key={index}>
                                <input className='scale-125'
                                    type="checkbox"
                                    onChange={() => handleCategoryChange(category)}
                                    checked={selectedCategory.includes(category)} />
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Search by Locations */}
                <div className={showFilters ? "" : "max-lg:hidden"}>
                    <h4 className='font-medium text-lg py-4 pt-14'>Search by Locations</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {JobLocations.map((location, index) => (
                            <li className='flex gap-3 items-center' key={index}>
                                <input className='scale-125' type="checkbox"
                                    onChange={() => handleLocationChange(location)}
                                    checked={selectedLocation.includes(location)} />
                                {location}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Search by Levels */}
                <div className={showFilters ? "" : "max-lg:hidden"}>
                    <h4 className='font-medium text-lg py-4 pt-14'>Search by Levels</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {JobLevels.map((levels, index) => (
                            <li className='flex gap-3 items-center' key={index}>
                                <input className='scale-125' type="checkbox"
                                    onChange={() => handleLevelChange(levels)}
                                    checked={selectedLevel.includes(levels)} />
                                {levels}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Job Listings */}
            <section className='w-full lg:w-3/4 text-gray-800'>
                <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
                <p className='mb-8'>Get your desired job from top companies</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {filterJobs.slice((currentPage - 1) * 9, currentPage * 9).map((job, index) => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </div>

                {filterJobs.length > 0 && (
                    <div className='flex justify-center items-center space-x-2 mt-10'>
                        <a href="#job-list" >
                            <img
                                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                                src={assets.left_arrow_icon}
                                alt="Previous Page"
                            />
                        </a>
                        {Array.from({ length: Math.ceil(filterJobs.length / 9) }).map((_, index) => (
                            <a href="#job-list" key={index} >
                                <button
                                    className={`w-10 h-10 flex items-center justify-center border-2 border-grey-600 rounded ${currentPage === index + 1 ? 'bg-purple-100 text-purple-600' : 'text-gray-500'}`}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </a>
                        ))}
                        <a href="#job-list">
                            <img
                                onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(filterJobs.length / 9)))}
                                src={assets.right_arrow_icon}
                                alt="Next Page"
                            />
                        </a>
                    </div>
                )}
            </section>
        </div>
    )
}

export default JobListing
