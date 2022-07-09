import React from 'react';
import useReviewer from './Hook/useReviewer';
import SingleReview from './Review/SingleReview';

const AllReview = () => {
    const [reviewers,setReviewers]=useReviewer();
    return (
        <div>
             <div className='container'>
                <div className='row'>
                    <h1 className='title  '>What Our Customers Say!</h1>
                    <div className='reviewer-container mb-5 mt-4'>
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