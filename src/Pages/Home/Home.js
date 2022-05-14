import React from 'react';
import ImproveSection from '../ImproveSection/ImproveSection';
import ProductManagement from '../ProductManagement/ProductManagement';
import Banner from './Banner/Banner';
import './Home.css';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <ImproveSection></ImproveSection>
            <ProductManagement></ProductManagement>
        </div>
    );
};

export default Home;