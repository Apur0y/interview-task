import React from 'react';

const OpenTask = () => {

    const datas=[
        {
            subject:"Register for upcoming crm webnars",
            date: "03-20-2025",
            status:"Not Started",
            priority:"Low",
            relation:"optimized"

        },
        {
            subject:"Register for upcoming crm webnars",
            date: "03-20-2025",
            status:"Not Started",
            priority:"Low",
            relation:"optimized"

        },
        {
            subject:"Register for upcoming crm webnars",
            date: "03-20-2025",
            status:"Not Started",
            priority:"Low",
            relation:"optimized"

        },
    ]
    return (
        <div className='text-black p-5 shadow-lg rounded-lg overflow-auto scroll-auto'>
            <h1 className='text-xl font-semibold mb-4'>My Open Task</h1>
            <table className=' border-collapse'>
                <thead>
                    <tr className='bg-gray-100 text-gray-400 font-normal'>
                      <th className='border-b-2 border-gray-300 px-4 py-2 text-left'>Subject</th>
                        <th className='border-b-2 border-gray-300 px-4 py-2 text-left'>Due Date</th>
                  <th className='border-b-2 border-gray-300 px-4 py-2 text-left'>Status</th>
                        <th className='border-b-2 border-gray-300 px-4 py-2 text-left'>Priority</th>
                         <th className='border-b-2 border-gray-300 px-4 py-2 text-left'>Relation</th>
                    </tr>
                </thead>
                <tbody className='overflow-auto scroll-auto'>
                    {
                        datas.map((data) => (
                            <tr >
                                <td className='border-b-2 border-gray-300 px-4 py-2 text-blue-800 w-64'>{data.subject}</td>
                      <td className='border-b-2 border-gray-300 w-44 px-4 py-2'>{data.date}</td>
                              <td className='border-b-2 border-gray-300 px-4 md:w-32 py-2'>{data.status}</td>
                                <td className='border-b-2 border-gray-300 px-4 py-2'>{data.priority}</td>
                             <td className='border-b-2 border-gray-300 px-4 py-2'>{data.relation}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OpenTask;