import React from 'react'
import Layout from '../components/Layout'
import Development from '../components/Development'

const Services = () => {
  return (
    <>
      <Layout heroText="Software Development Services" heroParagraph="We create scalable, robust solutions built to grow 
    with your business. Together, let’s develop custom software your customers will love while driving your company’s success."
        heroHeight="h-96" bgImage="https://e0.pxfuel.com/wallpapers/354/462/desktop-wallpaper-management-consulting-unifinn-global-capital-consultancy.jpg">
         <div className="flex flex-col gap-10 w-full h-auto min-h-screen p-6 md:p-10">
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left md:pr-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Graphic Design</h1>
              <h3 className="text-lg md:text-xl text-gray-700 mb-4">Entrust your brand's visual identity to our team of skilled designers who excel in crafting stunning graphics. We go beyond aesthetics, ensuring that every design resonates with your brand, captivating your audience with a compelling visual narrative.</h3>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Video Production</h1>
              <h3 className="text-lg md:text-xl text-gray-700 mb-4">Embark on a creative journey with our professional video production services, guiding your vision from initial concept to the final cinematic cut. We breathe life into your ideas, ensuring a captivating visual narrative that resonates with your audience.
              </h3>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <img 
                src="https://www.pwc.be/en/FY20/images/thumbnail-woman-showing-man-tablet-meeting-digital.jpg" 
                alt="About Us" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
         
          <div className="flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left md:pl-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Innovative Strategies</h1>
              <h3 className="text-lg md:text-xl text-gray-700 mb-4">Transform challenges into opportunities with our innovative consulting strategies. Our team crafts customized solutions that align with your business objectives, ensuring long-term success.</h3>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Expert Guidance</h1>
              <h3 className="text-lg md:text-xl text-gray-700 mb-4">Services for comprehensive business guidance. From optimizing operations to navigating market trends, we are committed to your success journey
              </h3>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <img 
                src="https://imageio.forbes.com/specials-images/imageserve/6464b53d8e446c6bb2c2ff1a/Getty/960x0.jpg?format=jpg&width=960" 
                alt="Innovation" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
        
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left md:pr-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Tailored Business Consulting Solutions</h1>
              <h3 className="text-lg md:text-xl text-gray-700 mb-4">Explore our tailored business consulting solutions. Intel4u Services provides strategic insights, innovative strategies, and expert guidance to propel your business forward.</h3>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Strategic Insights</h1>
              <h3 className="text-lg md:text-xl text-gray-700 mb-4">Gain a competitive edge with our in-depth market analysis and strategic planning. We provide actionable insights to drive informed decision-making and sustainable growth.
              </h3>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <img 
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Management_Consultant.jpg" 
                alt="Smart Solutions" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <Development />
      </Layout>
    </>
  )
}

export default Services
