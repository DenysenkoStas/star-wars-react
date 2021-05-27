import React from 'react';

const Spinner = () => {
    return (
        <div className='p-5 w-100 text-center'>
            <div className='spinner-border text-light' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
