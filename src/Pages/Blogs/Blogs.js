import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container container w-50'>
            <div className='blog'>
                <h2 className='blog-title'>Q1.  Difference between javascript and nodejs?</h2>
                <p className='question-answer'> JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
            </div>
            <div className='blog'>
                <h2 className='blog-title'>Q2. When should you use nodejs and when should you use mongodb?</h2>
                <p className='question-answer'>Nodejs: Node.js is an interpreter or runtime/ running environment for JavaScript. built on Chrome's V8 JavaScript engine. responsibility is especially to execute your application. <br />
                    MongoDB: is a No-SQL database for storing data. when you need high availability of data with automatic, fast, and instant data recovery.
                </p>

            </div>
            <div className='blog'>
                <h2 className='blog-title'> Q3.Differences between sql and nosql databases?</h2>
                <p className='question-answer'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='blog'>
                <h2 className='blog-title'> Q4. What is the purpose of jwt and how does it work?</h2>
                <p className='question-answer'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.</p>
            </div>
        </div>
    );
};

export default Blogs;