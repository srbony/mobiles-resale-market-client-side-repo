import React from 'react';
import Footer from '../../Shared/Footer/Footer';
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