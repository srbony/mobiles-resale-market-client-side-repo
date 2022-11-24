import React from 'react';

const Blog = () => {
    return (
        <div className='grid '>
            <div className=' rounded-md bg-slate-500 p-8  my-5'>
                <div className='text-white'>
                    <h2 className=''>Q:What are the different ways to manage a state in a react application?</h2>
                    <p>1.Local state:Local (UI) state Local state is data we manage in one or another component.</p>
                    <p>2.Global state:Global (UI) state  Global state is data we manage across multiple components.</p>
                    <p>3.Server state:Server state Data that comes from an external server that must be integrated with our UI state.</p>
                    <p>4.URL state:URL state Data that exists on our URLs, including the pathname and query parameters.</p>
                </div>

            </div>
            <div className='rounded-md bg-slate-500 p-8  my-5'>
                <div>
                    <h2>How does prototypical inheritance work?</h2>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Blog;

