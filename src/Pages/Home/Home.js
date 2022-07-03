import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <h1 className='text-color text-center mt-3'>Smart Watch Shop</h1>
            <Banner></Banner>
            <Review></Review>
        </div>
    );
};

export default Home;