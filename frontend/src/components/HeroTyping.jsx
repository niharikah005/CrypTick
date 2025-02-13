import React from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
const Hero1 = () => {
  return (
    <div className='text-black '>
      <div className='max-w-[800px] w-full my-9 mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-4'>
        Stay Safe While Investing
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-2xl text-lg font-bold py-2'>
            Analyse real-time data for coins like
          </p>
          <ReactTyped
            className='md:text-3xl sm:text-2xl text-lg font-bold md:pl-4 pl-2'
            strings={['USDT', 'LINK', 'DOGE', 'etc']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-xl text-lg font-bold text-gray-500'>Monitor real-time data and detect pump-and-dump scam patterns</p>
        <button className='bg-[#00df9a] w-[180px] rounded-md font-medium my-4 mx-auto py-2 text-black'>
          <Link to={`/coin`}>
          Get Started
          </Link>
          </button>
      </div>
    </div>
  );
};

export default Hero1;
