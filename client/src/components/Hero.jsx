import React, { useRef, useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Hero = () => {
    const { setSearchFilter, setIsSearched } = useContext(AppContext);
    const titleRef = useRef(null);
    const locationRef = useRef(null);

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        });
        setIsSearched(true);
    };

    return (
        <div className="overflow-hidden flex flex-col justify-center items-center w-full mt-10">
            <div className="w-full max-w-7xl flex flex-col items-center">
                {/* Hero Background */}
                <div className="relative rounded-3xl shadow-2xl overflow-hidden w-full min-h-[500px]">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background: "linear-gradient(135deg, #9333ea 0%, #003366 100%)",
                            filter: "brightness(1.1) saturate(1.2)",
                            opacity: 0.95,
                        }}
                    />

                    {/* Hero Content */}
                    <div className="px-6 sm:px-8 py-16 sm:py-20 text-center relative z-5">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                            Welcome to Our Job Portal
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-100 mb-8 sm:mb-10 drop-shadow">
                            Find your dream job or the perfect candidate with ease.
                        </p>

                        {/* Search Bar */}
                        <div className="bg-white rounded shadow-lg flex flex-col sm:flex-row items-center w-full max-w-3xl mx-auto p-2 gap-2">
                            {/* Job Title */}
                            <div className="flex items-center flex-1 px-4 w-full">
                                <img src={assets.search_icon} alt="search" className="w-5 h-5 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Search for jobs"
                                    className="w-full outline-none text-gray-700"
                                    ref={titleRef}
                                />
                            </div>

                            {/* Divider for Desktop */}
                            <div className="hidden sm:block w-px h-6 bg-gray-300 mx-4" />

                            {/* Location */}
                            <div className="flex items-center flex-1 px-4 w-full">
                                <img src={assets.location_icon} alt="location" className="w-5 h-5 mr-3 " />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full outline-none text-gray-700"
                                    ref={locationRef}
                                />
                            </div>

                            {/* Search Button */}
                            <button
                                onClick={onSearch}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded w-full sm:w-auto"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trusted Logos */}
                <div className="bg-white shadow-md rounded-lg mt-3 px-10 py-4 flex flex-wrap items-center justify-center gap-10 lg:gap-20 w-full">
                    <p className="font-medium text-gray-500">Trusted by</p>
                    <img src={assets.microsoft_logo} alt="Microsoft" className="h-4" />
                    <img src={assets.walmart_logo} alt="Walmart" className="h-4" />
                    <img src={assets.amazon_logo} alt="Amazon" className="h-4" />
                    <img src={assets.adobe_logo} alt="Adobe" className="h-4" />
                    <img src={assets.accenture_logo} alt="Accenture" className="h-4" />
                    <img src={assets.samsung_logo} alt="Samsung" className="h-4" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
