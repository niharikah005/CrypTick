import React from 'react';
import animationData from '../assets/animation.json';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

const HeroSection = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };  

    return (
        <div className='w-full bg-radial from-[#451795] to-[#12032b] text-white py-6 px-5'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='w-[300px] mx-auto my-4 mr-auto' >
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Detect Pump & Dump</h1>
                <p>
                CrypTick is a tool designed to identify potential pump-and-dump schemes in the memecoin market by analyzing trading patterns using AI/ML models and integrating blockchain data for transparency. 
                    </p>
                    <div>
                        <Link to='/home'>
                        </Link>
            <Link
            to="/home"
          >
            <button className="bg-[#00ff88] text-[#12032b] my-5 px-3 py-3 rounded-lg font-semibold
            hover:bg-white hover:text-[#451795] transition-all duration-300
            text-center w-auto cursor-pointer">Get started</button>
          </Link>
                    </div>
            </div>

            
        </div>
        </div>
    );
}
 
export default HeroSection;