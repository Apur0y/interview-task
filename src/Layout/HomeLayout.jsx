import React from 'react';
import { IoMdHome } from 'react-icons/io';
import MainContent from '../pages/Home/MainContent/MainContent';

const HomeLayout = () => {
    return (
        <div className='flex'>
            <div className='w-24 bg-gray-200 px-3 py-6 flex justify-center items-center min-h-screen'>
                <div>
                <IoMdHome className='text-gray-600 p-2 bg-white rounded-full size-12 '/>
                </div>
           
            </div>

            <div className='flex-1 bg-white'>
                <MainContent></MainContent>
            </div>
        </div>
    );
};

export default HomeLayout;