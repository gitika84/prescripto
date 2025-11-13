import React from 'react'
import { assets } from '../assets/assets.js'

const About = () => {
  return (
    <div>
        
        <div className='text-center text-2xl pt-10 text-gray-500 '>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full  md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
              <p>Welcome to Prescripto, your trusted partner in modern healthcare. We’re dedicated to making quality medical care accessible, convenient, and reliable for everyone. With just a few clicks, you can find experienced doctors, compare specialties, and book appointments from the comfort of your home.</p>
              <p>Our mission is to bridge the gap between patients and healthcare professionals by combining technology with compassion. Whether you need a general consultation, a specialist opinion, or long-term care, we help you connect with the right doctor — anytime, anywhere.</p>
              <b className='text-gray-800'>Our Vision</b>
              <p>At Prescripto, your health comes first. We believe in simplifying the healthcare experience so you can focus on what truly matters — your well-being.</p>
          </div>
        </div>

        <div className='text-xl my-4'>
          <p> WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>


        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
            <b>Efficiency:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>

          <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
            <b>Convenience:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
            <b>Personalization:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>

    </div>
  )
}

export default About