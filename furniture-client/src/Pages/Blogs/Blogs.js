import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold mt-7'>1. What are the different ways to manage a state in a React application?</h1>
            <p className='mb-12'>There are four different ways to manage a state in a React application. They are Local state, Global state, Server state, URL state.</p>
            <h1 className='text-2xl font-bold mt-7'>2. How does prototypical inheritance work?</h1>
            <p className='mb-12'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            <h1 className='text-2xl font-bold mt-7'>3. What is a unit test? Why should we write unit tests?</h1>
            <p className='mb-12'>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. For Test-Driven Development (TDD), we write unit tests before writing any implementation. This makes our implementation details in our code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.</p>
            <h1 className='text-2xl font-bold mt-7'>4. React vs. Angular vs. Vue?</h1>
            <p className='mb-12'> Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: we must solve the model and controller ourself. Besides this, there are only advantages and lots of advantages.

                One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.

                With React.js, we handle the markup and the logic in the same file, which means we can output variables in a view component (JSX). <br /> Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications. <br /> Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.

                Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.

            </p>
        </div>
    );
};

export default Blogs;