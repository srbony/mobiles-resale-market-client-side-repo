import React from 'react';

const Blog = () => {
    return (
        <div className='grid '>
            <div className=' rounded-md bg-slate-500 p-8  my-5'>
                <div className='text-white text-xl'>
                    <h2 className='text-lime-500'>Q:What are the different ways to manage a state in a react application?</h2>
                    <p>1.Local state:Local (UI) state Local state is data we manage in one or another component.</p>
                    <p>2.Global state:Global (UI) state  Global state is data we manage across multiple components.</p>
                    <p>3.Server state:Server state Data that comes from an external server that must be integrated with our UI state.</p>
                    <p>4.URL state:URL state Data that exists on our URLs, including the pathname and query parameters.</p>
                </div>

            </div>
            <div className='rounded-md bg-slate-500 p-8  my-5'>
                <div className='text-white text-xl'>
                    <h2 className='text-lime-400'>What is unit test?why should we write unit tests?</h2>
                    <p>Unit Tests:Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. “Unit testing is a great discipline, which can lead to 40% 80% reductions in bug density</p>
                    <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle</p>
                </div>
            </div>
            <div className='rounded-md bg-slate-500 p-8  my-5'>
                <div className='text-white text-xl'>
                    <h2 className='text-lime-400'>How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
                </div>
            </div>
            <div className='rounded-md bg-slate-500 p-8  my-5'>
                <div className='text-white text-xl'>
                    <h2 className='text-lime-400'>React vs Angular vs. Vue</h2>
                    <p><span className='text-lime-400'>React:</span>One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.</p>
                    <p> <span className='text-lime-400'>Angular:</span>The first version was Angular.JS. Angular is currently known as a JavaScrip.Angular.</p>
                    <p><span className='text-lime-400'>Vue:</span>Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;

