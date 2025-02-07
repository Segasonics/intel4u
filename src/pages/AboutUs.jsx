import React from 'react';
import Layout from '../components/Layout';
import Intellectual from '../components/Intellectual';

const AboutUs = () => {
  return (
    <>
      <Layout
        heroText="About InTeL4U"
        heroParagraph="We are a digital transformation consultancy and engineering company that delivers cutting-edge solutions for global organisations and technology startups. Since 2007 we have established brands reimagine their business through digitalisation."
        heroHeight="h-96"
        bgImage="https://neer.co.in/wp-content/uploads/2024/06/NEER-How-Groundwater-Consultants-Help-in-Water-Conservation.jpg"
      >
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full h-full p-6 md:p-10">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src="https://kantata.marketing/wp-content/uploads/2021/08/consulting-firm-project-management.jpg" 
              alt="About Us" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">We are Taking Small Steps to Make Earth a Better Planet</h1>
            <h3 className="text-lg md:text-xl text-gray-700 mb-4">Business contents insurance is a type of IT insurance that can protect the possessions and equipment.</h3>
            <p className="text-gray-600 mb-2 ">Our mission is to help enterprises accelerate adoption of new technologies, untangle complex issues that always emerge during digital evolution, and orchestrate ongoing innovation. Whether it is a consumer-oriented app or a transformative enterprise-class solution, the company leads the process from ideation and concept to delivery, and provides ongoing support through its IS360 framework.</p>
            <button className="mt-4 px-6 py-2 bg-darkblue text-white rounded">View View</button>
          </div>
        </div>
        <Intellectual />
      </Layout>
    </>
  );
};

export default AboutUs;
