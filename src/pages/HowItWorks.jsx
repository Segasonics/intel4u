import React from "react";
import Layout from "../components/Layout";
import { FaUserCheck, FaClipboardList, FaHeadset } from "react-icons/fa";
import Development from "../components/Development";

const HowItWorks = () => {
  return (
    <>
      <Layout 
        heroText="Meet your new customer service platform" 
        heroParagraph="Support your customers with speed and service that's second to none" 
        heroHeight="h-96" 
        bgImage="https://img.freepik.com/free-photo/business-adviser-analyzing-financial-figures-denoting-progress-work-company_1423-97.jpg"
      >
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">How It Works</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We simplify your workflow and enhance customer interactions in just a few steps.
          </p>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6">
          <div className="flex flex-col items-center text-center max-w-sm">
            <FaUserCheck className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold">Step 1: Sign Up</h3>
            <p className="text-gray-600">Create your account and get instant access to our platform.</p>
          </div>

        
          <div className="flex flex-col items-center text-center max-w-sm">
            <FaClipboardList className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold">Step 2: Manage</h3>
            <p className="text-gray-600">Customize your settings, set up automation, and track interactions.</p>
          </div>

          <div className="flex flex-col items-center text-center max-w-sm">
            <FaHeadset className="text-5xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold">Step 3: Assist Customers</h3>
            <p className="text-gray-600">Provide fast, efficient, and high-quality support.</p>
          </div>
        </div>


        <div className="text-center mt-12 mb-10">
          <h2 className="text-3xl font-semibold">Get Started Today!</h2>
          <p className="text-gray-600 mt-2">Join us and experience seamless customer interactions.</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Start Now
          </button>
        </div>
        <Development />
      </Layout>
    </>
  );
};

export default HowItWorks;
