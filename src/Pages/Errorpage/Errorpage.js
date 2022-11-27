import React from 'react';
import { useRouteError } from 'react-router-dom';
import img from '../../assets/error.png'

const Errorpage = () => {
    const error = useRouteError();
    return (
        <div>
            <p className='text-red-500'>Somthing went wrong!!!</p>
            <p className='text-red-400'>{error.status || error.message}</p>
            <div>
                <figure><img src={img} className="w-45 h-35" alt="Mobiles" /></figure>
            </div>

        </div>
    );
};

export default Errorpage;