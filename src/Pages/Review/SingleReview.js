import React from 'react';
import './SingleReview.css'

const SingleReview = ({reviewer}) => {
    const{img,comment,name,rating}=reviewer;
    return (
        <div className='card'>
            <img src={img}  height='300px'style={{padding:'0px 5px 5px 5px'}}  alt="" />
          
            <h5 className='card-title ms-2 padding'>Name:{name}</h5>
            
            <p className='card-text ms-2 padding '>Comment:{comment}</p>
            <p className='card-text ms-2 padding'>Rating:{rating}</p>
        </div>
    );
};

export default SingleReview;