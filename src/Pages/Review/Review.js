import React from 'react';
import useReviewer from '../Hook/useReviewer';
import SingleReview from './SingleReview';
import './Review.css'
import { Link } from 'react-router-dom';

const Review = () => {
    const [reviewers,setReviewers]=useReviewer();
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <h1 className='title mt-4 mb-4'>Customer Review:(3)</h1>
                    <div className='reviewer-container mb-2'>
                    {
               reviewers.slice(0,3).map(reviewer=><SingleReview key={reviewer.id} reviewer={reviewer}></SingleReview>)
           } 
                    </div>
                </div>

            </div>
            <div className='d-flex justify-content-center'>
                <Link to='review'></Link>
                {/* <button className='btn btn-info text-center px-5 mt-2 fs-4  mb-4'>See all Reviews</button> */}
            </div>
           
        </div>
    );
};

export default Review;