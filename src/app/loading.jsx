import React from 'react';
import { SyncLoader } from 'react-spinners';

const loadingPage = () => {
    return (
        <div className='flex items-center justify-center h-[60vh]'>
            <div>
                <SyncLoader />
            </div>
        </div>
    );
};

export default loadingPage;