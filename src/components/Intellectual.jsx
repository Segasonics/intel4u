import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Intellectual = () => {
    const [datas, setDatas] = useState([]);
    const url=import.meta.env.VITE_URL
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${url}`);
            setDatas(data);
            
        } catch (error) {
            console.log("Failed to fetch data", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center text-center px-6 md:px-10 py-16">
            {/* Header Section */}
            <div className=" space-y-6 mb-12">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-600">
                    Why Choose Intel4u as Your Custom Software Development Partner?
                </h1>
                <p className="text-lg text-gray-500">
                    Leading software development company. With over 17 years of market experience.
                    Present in 20 countries. Our development team drives excellence, ensuring we deliver exactly what your business needs.
                    Trusted by Fortune 500 giants like Intel, Luxottica, Jaguar Land Rover, and Guinness, bold mid-sized companies, and ambitious startups.
                </p>
            </div>

            {/* Cards Section */}
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
                {datas?.map((data, index) => (
                    <div key={index} className="bg-white text-black shadow-lg rounded-lg p-6 w-80">
                        <img 
                            src={data?.Image?data?.Image:"https://i.pinimg.com/736x/76/5c/ea/765ceae200549062fab3c689ca07d054.jpg"} 
                            alt={data.Title} 
                            className="w-10 h-15 object-cover rounded-md mx-auto"
                        />
                        <h1 className="text-xl font-semibold mt-4">{data.Title}</h1>
                        <p className="text-gray-700 mt-2">{data.Description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Intellectual;

