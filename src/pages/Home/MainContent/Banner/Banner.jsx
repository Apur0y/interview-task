import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { IoDownloadOutline } from 'react-icons/io5';

const Banner = () => {
    const items=[
        {
            title:"Create You first lead",
            icons:<FaFilter className='size-6 text-blue-600' />
            ,
            para:"One-time import of contacts and more from spresdsheets"
        },
        {
            title:"Import From File",
            icons:<IoDownloadOutline className='size-10 text-blue-600'  />
            ,
            para:"One-time import of contacts and more from spresdsheets",
            action:"Action"
        }
        ,
        {
            title:"Automate repetitive tasks",
            icons:<IoDownloadOutline className='size-10 text-blue-600'  />,
            para:"One-time import of contacts and more from spresdsheets",
            action:"Action"
        }
    ]
    return (
        <div className='shadow-lg text-black flex justify-between p-8 gap-6 rounded-lg mt-10  w-11/12 mx-auto flex-col md:flex-row'>
            <div className='flex justify-center i flex-col'>
                <h1 className='text-xl text-start'>Welcome, Shaikot</h1>
                <p>Check out suggetiond to klk off you day</p>

                <button className='underline text-start mt-7'>View All Cards</button>
            </div>

            <div className='flex gap-5 flex-col md:flex-row'>
                {
                    items.map(item=>(<>
                    <div className='flex justify-center  flex-col w-72 bg-blue-50 p-5 gap-3 rounded-lg'>
                        <p className='text-center flex justify-center items-center'>{item.icons}</p>
                        <h1 className='text-xl font-medium text-start'>{item.title}</h1>
                        <p className='text-gray-400'>{item.para}</p>
                        <button className='text-blue-600'>{item?.action}</button>
                    </div>
                    </>))
                }

            </div>
            
        </div>
    );
};

export default Banner;