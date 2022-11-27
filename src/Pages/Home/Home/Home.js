import React from 'react';

import Slider from '../Slider/Slider';
import Products from './Products/Products';

const Home = () => {
    return (
        <div className='mx-5'>
            <Slider></Slider>
            <Products></Products>

        </div>
    );
};

export default Home;