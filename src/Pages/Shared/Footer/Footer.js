import React from 'react';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-container'>
            <footer className='mt-5 text-center'>
                <h3 className='pt-4'><FontAwesomeIcon className='pe-2' icon={faCopyright}></FontAwesomeIcon><small>All Right Reserved By Ariful Islam-{year}</small></h3>
            </footer>
        </div>

    );
};

export default Footer;