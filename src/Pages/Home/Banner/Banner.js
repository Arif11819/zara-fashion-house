import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    const banner1 = 'https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhcmVob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
    const banner2 = 'https://images.unsplash.com/photo-1589792923962-537704632910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHdhcmVob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
    const banner3 = 'https://images.unsplash.com/photo-1622030360273-a8d1377be08b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHdhcmVob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
    return (
        <div className='banner-section'>
            <Carousel>
                <Carousel.Item>
                    <img className='banner-picture' src={banner1} alt="" />
                    <Carousel.Caption className='fw-bolder text-dark'>
                        <h3>Maximize Our Warehouse Efficiency</h3>
                        <p>Modern Online Warehouse Management Software.</p>
                        <button className='banner-button'>Start now-It's free</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='banner-picture' src={banner2} alt="" />
                    <Carousel.Caption className='fw-bolder text-dark'>
                        <h3>Maximize Our Warehouse Efficiency</h3>
                        <p>Modern Online Warehouse Management Software.</p>
                        <button className='banner-button'>Start now-It's free</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='banner-picture' src={banner3} alt="" />

                    <Carousel.Caption className='fw-bolder text-dark'>
                        <h3>Maximize Our Warehouse Efficiency</h3>
                        <p>Modern Online Warehouse Management Software.</p>
                        <button className='banner-button'>Start now-It's free</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;