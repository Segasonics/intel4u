import React from 'react';
import Layout from '../components/Layout';
import Intellect from '../components/Intellect';
import Intellectual from '../components/Intellectual';
import Development from '../components/Development';

const Home = () => {
  return (
    <>
    <Layout heroParagraph="From innovative startups to Fortune 500 enterprises, businesses trust us to develop, test, upgrade, and scale their digital products. We ensure smooth growth and lasting success every step of the way" heroHeight="h-screen" heroText="Build Bespoke Software Solution for Your Business Growth" bgImage="https://t4.ftcdn.net/jpg/07/35/11/69/360_F_735116958_tnJjukleEtyLyCQMh4bo6HFN5fhu87U3.jpg">

      {/* More content below the hero section */}
      <div className="p-20 bg-white-100  w-full text-center items-center">
         <Intellect />
      </div>
      
      <div className='bg-gray-200 w-full h-max text-white text-center items-center p-8'>
            <Intellectual />
        </div>
        <div className='w-full items-center'>
            <Development />
        </div>
    </Layout>
    </>
  );
};

export default Home;

