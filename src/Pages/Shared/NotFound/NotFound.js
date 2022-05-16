import React from 'react';
const NotFound = () => {
    const errorPicture = 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXJyb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
    return (
        <div>
            <h2 className='text-primary text-center mt-4'>404 ERROR</h2>
            <img className='w-100' src={errorPicture} alt="" />
        </div>
    );
};

export default NotFound;