import React from 'react'

const Development = () => {
    return (
        <section className="bg-[#0A192F] text-white py-16 px-20 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/3 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Why Choose Us?</h2>
      </div>

      <div className="md:w-2/3 space-y-4">
        <p className="text-lg leading-relaxed">
          We are a leading software development company with over 17 years of experience.
          Our global presence spans 20+ countries, helping businesses grow through technology.
        </p>
        <p className="text-lg leading-relaxed">
          Trusted by Fortune 500 giants like Intel, Jaguar Land Rover, and Guinness.
          Whether you're a startup or a bold mid-sized company, we deliver innovative solutions tailored to your needs.
        </p>
      </div>
    </section>
    )
}

export default Development
