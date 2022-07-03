import React from 'react';
import useReviewer from './Hook/useReviewer';
import SingleReview from './Review/SingleReview';

const AllReview = () => {
    const [reviewers,setReviewers]=useReviewer();
    return (
        <div>
             <div className='container'>
                <div className='row'>
                    <h1 className='title mt-4 mb-4'>What Our Customers Say!</h1>
                    <div className='reviewer-container mb-2'>
                    {
               reviewers.map(reviewer=><SingleReview key={reviewer.id} reviewer={reviewer}></SingleReview>)
           } 
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllReview;