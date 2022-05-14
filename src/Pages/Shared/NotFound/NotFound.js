import React from 'react';
const NotFound = () => {
    const errorPicture = 'https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fDQwNHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is Sleeping</h2>
            <img className='w-100' src={errorPicture} alt="" />
        </div>
    );
};

export default NotFound;