import React from 'react';
import {
  FaGithubSquare,
  FaInstagram,
  FaYoutubeSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mx-auto py-10 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 text-gray-300 bg-radial from-[#451795] to-[#12032b]'>
      {/* Left Column */}
      <div className='space-y-6 ml-17'>
        <Link to="/home">
          <img 
            src="/logo1.png" 
            alt="logo" 
            className='h-20 w-auto object-contain' 
          />      
        </Link>
        <p className='text-sm leading-relaxed'>
          Analyzing trading patterns in cryptocurrency using ML models and integrating blockchain data for transparency.
        </p>
        <div className='flex space-x-6'>
          <Link 
            to="https://www.instagram.com/coc_vjti/" 
            className='text-white hover:text-[#00ff88] transition-colors'
          >
            <FaInstagram size={24} />
          </Link>
          <Link 
            to="https://www.youtube.com/@communityofcoders1491" 
            className='text-white hover:text-[#00ff88] transition-colors'
          >
            <FaYoutubeSquare size={24} />
          </Link>
          <Link 
            to="https://github.com/CommunityOfCoders" 
            className='text-white hover:text-[#00ff88] transition-colors'
          >
            <FaGithubSquare size={24} />
          </Link>
        </div>
      </div>

      {/* Right Columns */}
      <div className='lg:col-span-2 flex justify-end gap-10 items-center'>
        <Link 
          to="/home" 
          className='text-lg font-semibold text-[#00ff88] hover:text-white transition-colors'
        >
          Home
        </Link>
        <Link 
          to="/coin" 
          className='text-lg font-semibold text-[#00ff88] hover:text-white transition-colors'
        >
          All Coins
        </Link>
        <Link 
          to="/team" 
          className='text-lg font-semibold text-[#00ff88] mr-17 hover:text-white transition-colors'
        >
          Team
        </Link>
      </div>
    </div>
  );
};

export default Footer;