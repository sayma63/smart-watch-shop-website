import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='mt-4 ms-4'>1.What is Context API?</h1>
            <p style={{fontSize:'20px',fontWeight:'400px'}}>Context API is a way to pass data through the component tree without having to pass props down manually at every level.It allows us to share information to any component, by storing it in a central place and allowing access to any component that requests it. We also say that it is a global variable that react app produce and it can easily pass around in child components.It solves the props drilling problem from all level of our application.In fact, any situation where we have to pass a prop through a component so it reaches another component somewhere down the tree is where we can use the Context API.</p>
        </div>
    );
};

export default Blogs;