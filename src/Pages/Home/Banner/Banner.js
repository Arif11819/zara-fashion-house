import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css';

const Banner = () => {
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