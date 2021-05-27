import React from 'react';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator w-100 text-center text-warning'>
            <img className='mb-2' src={icon} alt='error-icon'/>
            <h3>BOOM!</h3>
            <p className='mb-0'>
                something has gone terribly wrong <br/>
                (but we already sent droids to fix it)
            </p>
        </div>
    );
};

export default ErrorIndicator;
