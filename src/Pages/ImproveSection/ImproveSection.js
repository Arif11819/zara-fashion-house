import React from 'react';
import './ImproveSection.css';

const ImproveSection = () => {
    const picture = 'https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhcmVob3VzZSUyMG1hbmFnbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
    return (
        <div className='improve-section'>
            <div className='improve-section-text'>
                <h1><span>I</span>mprove performance <br />
                    & process time</h1>
                <h5>Better organize your warehouse with the smart <br /> double entry inventory system.</h5>
                <p>Get the most efficient stocking method and improve all your <br /> internal operations. Odoo's double-entry inventory has no <br /> stock input, output or transformation. Instead, all operations <br /> are stock moves between locations.</p>
            </div>
            <div className='improve-section-pic'>
                <img src={picture} alt="" />
            </div>
        </div>
    );
};

export default ImproveSection;