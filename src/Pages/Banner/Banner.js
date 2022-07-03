import React from 'react';
import pic from '../../images/pic.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container'>
            <div className='row mt-4 g-3'>
                <div className=' col col-12 col-md-6'>
                <p className='size'>Rolex Watch choices are  
                <span className='text-primary size'> best choice</span></p>
                    
                    <p className='fs-5'>Rolex offers a wide assortment of Oyster Perpetual and Cellini watches to suit any wrist. Discover the broad selection of Rolex watches to find a perfect combination of style and functionality.</p>
                    <button className='btn btn-info fs-5'>Live Demo</button>
                </div>
                <div className=' col col-12 col-md-6'>
                    <img className='img-fluid' src={pic} style={{backgroundColor:'black'}}   alt="" />

                </div>
                
            </div>
            
        </div>
    );
};

export default Banner;