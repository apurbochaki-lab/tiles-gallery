import React from 'react';
import { PacmanLoader } from 'react-spinners';

const loadingPage = () => {
    return (
        <div className='flex items-center justify-center h-[60vh]'>
            <div>
                <h2 className='text-3xl font-semibold mb-10 text-blue-400'>Wait Data is loading...</h2>
                <PacmanLoader size={40} color='blue' />
            </div>
        </div>
    );
};

export default loadingPage;