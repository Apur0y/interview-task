import React from 'react';
import Banner from './Banner/Banner';
import OpenTask from './OpenTask/OpenTask';
import Meetings from './Meetings/Meetings';

const MainContent = () => {
    return (
        <div >
            <Banner></Banner>
            <div className='flex justify-between px-10 flex-col md:flex-row overflow-auto'>
                <OpenTask></OpenTask>
                <Meetings></Meetings>
            </div>
        </div>
    );
};

export default MainContent;