import React from 'react';
import Layout from '../components/Layout';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Development from '../components/Development';

const ContactUs = () => {
  return (
    <>
      <Layout 
        heroText='YOUR SUCCESS STORY STARTS HERE!' 
        heroHeight="h-96" 
        bgImage="https://img.freepik.com/free-photo/young-employees-sitting-office-table-using-laptop-team-work-brainstorming-meeting-concept_146671-15628.jpg?semt=ais_hybrid"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen p-10 gap-10">
          
         
          <div className="w-full md:w-[40%]">
            <img 
              src="https://img.freepik.com/premium-photo/businesswoman-headset-consultant-studio-customer-service-crm-white-background-female-person-call-centre-representative-tech-support-assistant-contact-agent-helpdesk_590464-287237.jpg"
              alt="contact-pic"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          
          <div className="w-full md:w-[50%] space-y-6">
            <h1 className="text-3xl font-bold mb-4">Contact Info</h1>

            <div>
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <FaLocationDot className="text-2xl text-blue-500" /> Our Address
              </h2>
              <p className="text-gray-700">kishangarh gaushal road,vasant kunj 110070</p>
              <hr className="my-4 border-gray-300"/>
            </div>

            <div>
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <FaPhone className="text-2xl text-green-500" /> Phone Number
              </h2>
              <p className="text-gray-700">+1 720-673-8093</p>
              <hr className="my-4 border-gray-300"/>
            </div>

            <div>
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <IoIosMail className="text-2xl text-red-500" /> Email
              </h2>
              <p className="text-gray-700">Intel4u@gmail.com</p>
              <hr className="my-4 border-gray-300"/>
            </div>
          </div>
        </div>

        
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-semibold text-center mb-6">Send Your Message</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium">Name</label>
              <input type="text" placeholder="Enter your name" className="p-3 rounded border focus:ring-2 focus:ring-blue-400 outline-none"/>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 font-medium">Email</label>
              <input type="email" placeholder="Enter your email" className="p-3 rounded border focus:ring-2 focus:ring-blue-400 outline-none"/>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 font-medium">Contact</label>
              <input type="text" placeholder="Enter your contact number" className="p-3 rounded border focus:ring-2 focus:ring-blue-400 outline-none"/>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 font-medium">Message</label>
              <textarea placeholder="Write your message..." rows="4" className="p-3 rounded border focus:ring-2 focus:ring-blue-400 outline-none"></textarea>
            </div>

            <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>
        <Development />
      </Layout>
    </>
  );
}

export default ContactUs;


