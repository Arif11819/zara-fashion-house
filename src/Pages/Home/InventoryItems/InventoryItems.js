import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css';

const InventoryItems = () => {
    const [items, setItems] = useState([]);
    const allItems = items.slice(0, 4);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleNavigateToManageItems = () => {
        navigate('/manageItems');
    }

    return (
        <div>
            <h1 className='text-center mx-auto'>Inventory Items</h1>
            <div>
                {
                    allItems.map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    >

                    </InventoryItem>)
                }
                <button onClick={handleNavigateToManageItems} className='btn btn-dark manage-inventory-btn'>Manage All Inventories</button>
            </div>
        </div>
    );
};

export default InventoryItems;