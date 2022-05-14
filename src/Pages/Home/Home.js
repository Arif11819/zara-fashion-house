import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
        </div>
    );
};

export default Home;